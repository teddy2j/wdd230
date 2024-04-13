const tbody = document.querySelector("tbody");
const cardsContainer = document.querySelector("#cards")

async function getPrices() {
    const response = await fetch("https://teddy2j.github.io/wdd230/final-project-scoots/data/rental.json");
    const data = await response.json();
    const rentals = data.rentals; //rentals is an array of objects

    fillTable(rentals);
    makeCards(rentals);

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

function makeCards(rentals) {
    rentals.forEach(rental => {
        const card = document.createElement("div");
        card.setAttribute("class", "scooter-card");
        const title = document.createElement("h3");
        const maxPersons = document.createElement("p");
        const picture = document.createElement("img");
        const priceFull = document.createElement("p");

        title.innerHTML = rental.rentalType;
        maxPersons.innerHTML = `Max. Persons: ${rental.maxPersons}`;
        picture.setAttribute("src", rental.imgSrc);
        picture.setAttribute("loading", "lazy");
        priceFull.innerHTML = `Reserve NOW for a full day: $${rental["priceFull-reservation"]}`;
        const price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerHTML = `$${rental["priceFull-reservation"]}`
        priceFull.appendChild(price);

        card.appendChild(title);
        card.appendChild(maxPersons);
        card.appendChild(picture);
        card.appendChild(priceFull);

        cardsContainer.appendChild(card);

        console.log("hello");


    });

}