package co.edu.uniandes;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

/**
 * Servlet implementation class MainServlet
 */
@WebServlet("/MainServlet")
public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		MongoClient mongo = new MongoClient("172.24.99.96");

		DB db = mongo.getDB("Grupo1");
		DBCollection coll = db.getCollection("seguidores");
		
		request.setCharacterEncoding("UTF-8");
		
		String name = request.getParameter("name");
		
		// llega name=11 (por ejemplo para Alonso Salazar)
		
		//String [] s = name.split("=");

		int codigo = Integer.parseInt(name);
		
		switch ( codigo ) {
		case 0: name = "Enrique Peñalosa"; break;
		case 1: name = "Rafael Pardo"; break;
		case 2: name = "Clara López"; break;
		case 3: name = "Francisco Santos"; break;
		case 4: name = "Daniel Raisbeck"; break;
		case 5: name = "Alex Vernot"; break;
		case 10: name = "Federico Gutiérrez"; break;
		case 11: name = "Alonso Salazar"; break;
		case 12: name = "Gabriel Jaime Rico"; break;
		case 13: name = "Juan Carlos Vélez"; break;
		case 20: name = "Angelino Garzón"; break;
		case 21: name = "Roberto Ortiz"; break;
		case 22: name = "Maurice Armitage"; break;
		case 23: name = "Carlos José Holguín"; break;
		case 24: name = "Michel Maya"; break;
		case 25: name = "Wilson Arias"; break;
		};
		
		name = name.toUpperCase();

		BasicDBObject query = new BasicDBObject();
		query.put("name", name);
				
		BasicDBObject fields = new BasicDBObject();
		fields.put("timeExtracted", 1);
		fields.put("followersCount", 1);

//		DBCursor cursor = coll.find(query, fields).limit(15);
		DBCursor cursor = coll.find(query, fields);

//		GsonBuilder builder = new GsonBuilder();
//		Gson gson = builder.create();
		
		String json = "[ ";
		int i = 0;
		try {
			while (cursor.hasNext()) {
				
				
				DBObject m = cursor.next();
				
				ArrayList <Integer> f = (ArrayList <Integer>) m.get("followersCount");
				ArrayList <String> t = (ArrayList <String>) m.get("timeExtracted");
				String fecha = t.get(0).substring(5,10);
				
				json += "{ \"label\": \"";
				json += fecha + "\",";
				json += " \"y\": ";
				json += f.get(0) + " },";
			}
		} finally {
			cursor.close();
		}
		json += " ]";
		json = json.replace("}, ]","} ]");
		
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		
		out.write(json);
	}
}
