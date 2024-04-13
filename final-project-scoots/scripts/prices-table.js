const tbody = document.querySelector("tbody");

async function getPrices() {
    const response = await fetch("https://teddy2j.github.io/wdd230/final-project-scoots/data/rental.json");
    const data = await response.json();
    const rentals = data.rentals;

    console.log(rentals);

    fillTable(rentals); //rentals is an array of objects

}

getPrices();


function fillTable(rentals) {
    rentals.forEach(rental => {
        const row = document.createElement("tr");
        const rentalType = document.createElement("td");
        const maxPersons = document.createElement("td");
        const reservationHalf = document.createElement("td");
        const reservationFull = document.createElement("td");
        const walkinHalf = document.createElement("td");
        const walkinnFull = document.createElement("td");

        rentalType.innerHTML = rental.rentalType;
        maxPersons.innerHTML = rental.maxPersons;
        reservationHalf.innerHTML = rental["priceHalf-reservation"];
        reservationFull.innerHTML = rental["priceFull-reservation"];
        walkinHalf.innerHTML = rental["priceHalf-walkin"];
        walkinnFull.innerHTML = rental["priceFull-walkin"];

        row.appendChild(rentalType);
        row.appendChild(maxPersons);
        row.appendChild(reservationHalf);
        row.appendChild(reservationFull);
        row.appendChild(walkinHalf);
        row.appendChild(walkinnFull);

        tbody.appendChild(row);


    });
}