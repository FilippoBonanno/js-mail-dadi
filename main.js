

//Stampiamo uno studente casuale compreso tra 0 e 3
let casualUser = Math.floor( 1 + Math.random()*7 ); 
let casualPC = Math.floor( 1 + Math.random()*7 ); 
console.log(`Il numero dell'utente è:`, casualUser);
console.log(`Il numero del PC è:`, casualPC);

	
if (casualPC > casualUser) {
	 console.log (`Il vincitore è il PC:`, casualPC )
		


} else if (casualPC < casualUser) {

    console.log (`Il vincitore è l'UTENTE:`, casualUser )

} else {

    console.log (`Parità`)
};


let Email = prompt ("Dammi la tua Email");

const lista = [
    "Francesco.ferdinanfdo@gmail.com",
    "Luca.lorenzo@gmail.com",
    "Michele.@gmail.com",
    "Filippoortigia@gmail.com",
    "Giuseppe@gmail.com"
];

if (lista.includes(Email)) {
    

    console.log (`Accesso Valido`);
       
} else {

    console.log (`Accesso Negato`);
};

