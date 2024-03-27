
async function getAds() {
    const response = await fetch("https://teddy2j.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    const members = data.members; //array of objects
    const spotlightTree = document.querySelectorAll(".ad"); //im getting an array of 3 references for the 3 html elements of class "ad"

    displayAds(members, spotlightTree);

}

getAds();


function displayAds(members, spotlightTree) {
    const ads = get3RamdomMembers(members); //im getting an array of 3 objects
    const tree = []; //este tendra un array de innerhtml que tendra cada iteracion del spotlightTree
    ads.forEach(ad => {


        //mision, convertir estos 3 elementos (h3 img y h4) en un solo string y luego ponerlo en un array of strings, para luego en el nivel superior, appendarlos en spotlightTree
        const container = document.createElement('div');

        // Crear elementos
        const name = document.createElement('h3');
        const img = document.createElement("img");
        const membership = document.createElement("h4");

        // Establecer contenido para los elementos
        name.innerText = ad.name;
        img.setAttribute("src", ad.image);
        membership.innerText = ad.membership;

        // Agregar los elementos al contenedor
        container.appendChild(name);
        container.appendChild(img);
        container.appendChild(membership);

        // Obtener el HTML del contenedor como una cadena de texto
        const htmlString = container.innerHTML;

        tree.push(htmlString);

    });

    for (let i = 0; i < 3; i++) {
        spotlightTree[i].innerHTML = tree[i];
    }

    //get an array of objects, outputs another array of objects. It takes 3 random objects from an array of 7 objects.
    function get3RamdomMembers(members) {

        //this is what i'll return. An array of 3 objects.
        const group = [];


        const randomNumbers = return3RandomNumbers();

        for (let i = 0; i < randomNumbers.length; i++) {
            group.push(members[randomNumbers[i]]);
        }

        //verification
        console.log("array of 3 objects::");
        console.log(group);


        return group;

    }

    function return3RandomNumbers() {
        const randomNumbers = [];
        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * 7);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        //verification
        console.log("random numbers:");
        console.log(randomNumbers);

        return randomNumbers;


    }

}


