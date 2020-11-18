// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// 

var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"].sort();
var userCognome = prompt("Inserisci il tuo cognome");
var newSurname = userCognome;
listaCognomi.push(newSurname);
var userPosition
for( i= 0; i< listaCognomi.length; i++){

    var contenutoLista = document.getElementById("lista-cognomi").innerHTML;   
    document.getElementById("lista-cognomi").innerHTML =  "<li>" + listaCognomi.sort() + "</li>";
    
}
console.log(listaCognomi.indexOf(newSurname));

userPosition = document.getElementById("user-position").innerHTML = "La tua posizione in coda è la n. : " + (listaCognomi.indexOf(newSurname) + 1);