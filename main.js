

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
}

