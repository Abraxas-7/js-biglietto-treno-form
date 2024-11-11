/*
    non so come ma mi aveva mangato le prime due line di codice (LINEA 8 e 9), ora l'ho corretto,
    COMUNQUE QUANDO VEDETE CHE NON FUNZIONA MANDATELO UN FEEDBACK, SE NON AVETE VOGLIA DI TROVARE IL PROBLEMA FA NIENTE ME LO
    RIGUARDO DA SOLO, PERO' DITEMELO PER TEMPO, NON E' POSSIBILE CHE SCOPRO CHE CERANO PROBLEMI LUNEDI MATTINA QUANDO L'ESERCIZIO
    L'HO CONSEGNATO VENERDI POMERIGIO (ANCHE PERCHE' NON SONO UNO STOLTO QUANDO HO PUSHATO HO FATTO TUTTE LE PROVE DEL CASO E FUNZIONAVA TUTTO) 
*/

let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");

// funzione per generare il biglietto
submitButton.addEventListener("click", () => {
    event.preventDefault()

    // prezzo per km
    const kmPrice = 0.21; 
    // valore dell'input del nome
    let clientName = document.getElementById("clientName").value;
    // valore dell'input del cognome
    let clientSurname = document.getElementById("clientSurname").value;
    // valore dell'input della distanza
    let distance = parseFloat(document.getElementById("distance").value);
    // valore dell'input dell'et
    let age = document.getElementById("age").value;

    // calcolo lo sconto
    let discount = 0;
    if (age === "17") {
        // sconto junior
        discount = 0.20;
    } else if (age === "70") {
        // sconto senior
        discount = 0.40;
    }

    // calcolo il prezzo con lo sconto
    let discountedPrice = distance * kmPrice * (1 - discount);
    
    // selezione degli elementi del biglietto
    let ticketPurchase = document.getElementById("ticketPurchase");
    let ticket = document.getElementById("ticket");
    let ticketName = document.getElementById("ticketName");
    let ticketSurname = document.getElementById("ticketSurname");
    let ticketKm = document.getElementById("ticketKm");
    let ticketPrice = document.getElementById("ticketPrice");

    // assegno i valori al biglietto
    ticketName.innerHTML = `<span class="fw-bold">Nome</span> ${clientName.toUpperCase()}`;
    ticketSurname.innerHTML = `<span class="fw-bold">Cognome</span> ${clientSurname.toUpperCase()}`;
    ticketKm.innerHTML = `<span class="fw-bold">Km</span> ${distance}`;
    ticketPrice.innerHTML = `<span class="fw-bold">Prezzo</span> ${discountedPrice.toFixed(2)} €`;

    // cambio la classe per far comparire il biglietto
    ticketPurchase.classList.remove("col-12");
    ticketPurchase.classList.add("col-6");
    ticket.classList.remove("d-none");
});

// funzione per resettare il tutto
resetButton.addEventListener("click", () => {
    // ricarica la pagina
    location.reload();
});

