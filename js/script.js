
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome: 'flavio', 
    cognome: 'origgi',
    eta: '31'
};


// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var k in studente){
    console.log(studente[k]);    
}

// Creare un array di oggetti di studenti.

var variStudenti = [
    {
        nome: 'flavio', 
        cognome: 'origgi',
        eta: '31'
    },
    {
        nome: 'pinco', 
        cognome: 'pallino',
        eta: '19'
    },
    {
        nome: 'pippo', 
        cognome: 'baudo',
        eta: '50'
    }
];


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < variStudenti.length; i++){
    for(var k in variStudenti[i]){
        console.log(variStudenti[i][k]);    
    }
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e eta'
