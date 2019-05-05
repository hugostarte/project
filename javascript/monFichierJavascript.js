var abonnements = function() {
	document.getElementById("calculer").addEventListener("click",calcul);
																		
	}
	
window.addEventListener("load",abonnements);


var calcul = function(){
	taille = document.getElementById("taille").value;
	poids = document.getElementById("poids").value;
	age = document.getElementById("age").value;
	imc = poids / Math.pow(taille,2);
	imcratio = Math.round(imc*1000000)/100 ; 
	document.getElementById("resultats").innerHTML = imcratio;
		
	
	
		if(taille && poids && age){
			if(age <= 18){
			courbe = "<img id ='courbe' src='images/courbeimc.jpg'></img>";
			}
			else{
				courbe = "";
			}
			
			if(imcratio < 16){
				statut = " Vous êtes anorexique "
			}
			if(imcratio > 16 && imcratio < 18.5){
				statut = " Vous êtes au stade maigreur "
			}
			if(imcratio > 18.5 && imcratio < 25){
				statut = " Vous avez une corpulence normale "
			}
			if(imcratio > 25 && imcratio < 30){
				statut = " Vous êtes en surpoids "
			}
			if(imcratio > 30 && imcratio < 35){
				statut = " Vous êtes en Obésité modérée (Classe 1) "
			}
			if(imcratio > 35 && imcratio < 40){
				statut = " Vous êtes en Obésité élevé  (Classe 2) "
			}
			if(imcratio > 40){
				statut = " Vous êtes en Obésité morbide "
			}
			document.getElementById("resultats").innerHTML = statut + "</br>Votre ratio est de "+ imcratio;
			document.getElementById("courbe").innerHTML = courbe;
	}

		else{
		erreur = "Vous devez remplir tous les champs";
		document.getElementById("resultats").innerHTML = erreur;
	}
	
}

