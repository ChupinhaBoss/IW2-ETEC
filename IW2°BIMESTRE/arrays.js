//ATIVIDADE 2
	function sortfunction(a, b){
	  return (a - b)
	}

	Data = [3,5,1,7,4,9,10];
	Data.sort(sortfunction);
	console.log(Data);

//ATIVIDADE 3
	function Receba() {
		var Num1 = document.getElementById("Num1"); 
		var Num2 = document.getElementById("Num2");
		var Num3 = document.getElementById("Num3");
		
		let Números = new Array();
			Números[0] = Num1.value;
			Números[1] = Num2.value;
			Números[2] = Num3.value;
		
		Números.sort(sortfunction);
	
		console.log(Números);
	}
	
	function sortfunction(a, b){
	  return (a - b)
	}

//ATIVIDADE 4 
	let Frutas = new Array();
		Frutas[0] = "Uva";
		Frutas[1] = "Maça";
		Frutas[2] = "Manga";
		Frutas[3] = "Banana";
		Frutas[4] = "Laranja";
		var NumFrutas = Frutas.length
		
//ATIVIDADE 5	
	console.log(Frutas[1]);
	
//ATIVIDADE 6
	console.log(Frutas[NumFrutas - 1]);

//ATIVIDADE 7.1
	Frutas.push("Abacaxi");

//ATIVIDADE 7.2
	Frutas.unshift("Morango");
	
//ATIVIDADE 7.3
	Frutas.pop();
	
//ATIVIDADE 7.4
	Frutas.shift();

//ATIVIDADE 8
	console.log(Frutas.indexOf('Laranja'));

//ATIVIDADE 9
	let FrutasCM = Frutas.indexOf("M");
	
	console.log(FrutasCM[0])
	console.log(FrutasCM[1])

	document.write('<br><br>');
	document.write('<br><br>');