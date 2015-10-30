var ciudades = [ "Bogotá", "Medellín", "Cali" ];
var candidatosBogota = [ "Enrique Peñalosa", "Rafael Pardo", "Clara López",
		"Francisco Santos", "Daniel Raisbeck", "Alex Vernot" ];
var candidatosMedellin = [ "Federico Gutiérrez", "Alonso Salazar",
		"Gabriel Jaime Rico", "Juan Carlos Vélez" ];
var candidatosCali = [ "Angelino Garzón", "Roberto Ortiz", "Maurice Armitage",
		"Carlos José Holguín", "Michel Maya", "Wilson Arias" ];
var ciudad;
var candidato;

window.onload = function() {
	candidato = candidatosBogota[0];
	ciudad = ciudades[0];
	document.getElementById('xx').innerHTML = "El candidato elegido es: "
			+ candidato;
	console.log(ciudad);
	console.log(candidato);
}

//function candidatoElegido() {
//	if (flag) {
//		var ciudad = ciudades[0];
//		var candidato = candidatosBogota[0];
//		document.getElementById('xx').innerHTML = "El candidato elegido es: "
//				+ candidato;
//		console.log(ciudad);
//		console.log(candidato);
//		flag = false;
//	}
//}

function seleccion1() {

	console.log(ciudad);
	document.getElementById('xx').innerHTML = "El candidato elegido es: "
			+ candidato;
	console.log(candidato);

	ciudad = document.getElementById('sel1').value;

	if (ciudad == "0") {
		console.log("Bogota")
		candidato = candidatosBogota[0];
		document.getElementById('xx').innerHTML = "El candidato elegido es: "
				+ candidato;
		console.log(candidato);

		var html1 = "";

		html1 += "<table class='table'>";
		html1 += "<thead>";
		html1 += "<tr class='something'>";
		html1 += "<th class='col-md-3'>Ciudad</th>";
		html1 += "<th class='col-md-3'>Candidato</th>";
		html1 += "</tr>";
		html1 += "</thead>";

		html1 += "<tbody>";

		html1 += "<tr class='something'>";
		html1 += "<td class='col-md-3'>";
		html1 += "<select class='form-control' onchange='seleccion1( );' id='sel1' name='selciudad'>";

		html1 += "<option value='0'>Bogotá</option>";
		html1 += "<option value='1'>Medellín</option>";
		html1 += "<option value='2'>Cali</option>";

		html1 += "</select>";
		html1 += "</td>";

		html1 += "<td class='col-md-3'>";
		html1 += "<select class='form-control' onchange='seleccion2( );' id='sel2' name='selcandidato'>";

		for (var i = 0; i < candidatosBogota.length; i++) {
			html1 += "<option value='" + i + "'>" + candidatosBogota[i]
					+ "</option>";
		}

		html1 += "</select>";
		html1 += "</td>";
		html1 += "</tr>";
		html1 += "</tbody>";
		html1 += "</table>";
		var s = document.getElementById('combo');
		s.innerHTML = html1;

	} else {
		if (ciudad == "1") {
			console.log("Medellin")
			candidato = candidatosMedellin[0];
			document.getElementById('xx').innerHTML = "El candidato elegido es: "
					+ candidato;
			console.log(candidato);

			var html2 = "";

			html2 += "<table class='table'>";
			html2 += "<thead>";
			html2 += "<tr class='something'>";
			html2 += "<th class='col-md-3'>Ciudad</th>";
			html2 += "<th class='col-md-3'>Candidato</th>";
			html2 += "</tr>";
			html2 += "</thead>";

			html2 += "<tbody>";

			html2 += "<tr class='something'>";
			html2 += "<td class='col-md-3'>";
			html2 += "<select class='form-control' onchange='seleccion1( );' id='sel1' name='selciudad'>";

			html2 += "<option value='0'>Bogotá</option>";
			html2 += "<option value='1' selected>Medellín</option>";
			html2 += "<option value='2'>Cali</option>";

			html2 += "</select>";
			html2 += "</td>";

			html2 += "<td class='col-md-3'>";
			html2 += "<select class='form-control' onchange='seleccion2( );' id='sel2' name='selcandidato'>";

			for (var i = 0; i < candidatosMedellin.length; i++) {
				html2 += "<option value='1" + i + "'>" + candidatosMedellin[i]
						+ "</option>";
			}

			html2 += "</select>";
			html2 += "</td>";
			html2 += "</tr>";
			html2 += "</tbody>";
			html2 += "</table>";
			var s = document.getElementById('combo');
			s.innerHTML = html2;

		} else {
			console.log("Cali")
			candidato = candidatosCali[0];
			document.getElementById('xx').innerHTML = "El candidato elegido es: "
					+ candidato;
			console.log(candidato);

			var html3 = "";

			html3 += "<table class='table'>";
			html3 += "<thead>";
			html3 += "<tr class='something'>";
			html3 += "<th class='col-md-3'>Ciudad</th>";
			html3 += "<th class='col-md-3'>Candidato</th>";
			html3 += "</tr>";
			html3 += "</thead>";

			html3 += "<tbody>";

			html3 += "<tr class='something'>";
			html3 += "<td class='col-md-3'>";
			html3 += "<select class='form-control' onchange='seleccion1( );' id='sel1' name='selciudad'>";

			html3 += "<option value='0'>Bogotá</option>";
			html3 += "<option value='1'>Medellín</option>";
			html3 += "<option value='2' selected>Cali</option>";

			html3 += "</select>";
			html3 += "</td>";

			html3 += "<td class='col-md-3'>";
			html3 += "<select class='form-control' onchange='seleccion2( );' id='sel2' name='selcandidato'>";

			for (var i = 0; i < candidatosCali.length; i++) {
				html3 += "<option value='2" + i + "'>" + candidatosCali[i]
						+ "</option>";
			}

			html3 += "</select>";
			html3 += "</td>";
			html3 += "</tr>";
			html3 += "</tbody>";
			html3 += "</table>";
			var s = document.getElementById('combo');
			s.innerHTML = html3;

		}
	}
}

function seleccion2() {
	ciudad = document.getElementById('sel1').value;

	if (ciudad == "0") {
		candidato = document.getElementById('sel2').value;
		document.getElementById('xx').innerHTML = "El candidato elegido es: "
				+ candidatosBogota[candidato];
		console.log("El candidato elegido es: ", candidatosBogota[candidato]);
	} else {
		if (ciudad == "1") {
			candidato = document.getElementById('sel2').value-10;
			document.getElementById('xx').innerHTML = "El candidato elegido es: "
					+ candidatosMedellin[candidato];
			console.log("El candidato elegido es: ",
					candidatosMedellin[candidato]);

		} else {
			candidato = document.getElementById('sel2').value-20;
			document.getElementById('xx').innerHTML = "El candidato elegido es: "
					+ candidatosCali[candidato];
			console.log("El candidato elegido es: ", candidatosCali[candidato]);
		}
	}
}

function graficar (titulo, puntos ) {
	var chart = new CanvasJS.Chart("seguidores2", {
		theme: "theme1",//theme1
		title:{
			text: titulo              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: puntos
		}
		]
	});
	chart.render();
}