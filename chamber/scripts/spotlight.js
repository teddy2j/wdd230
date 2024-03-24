const card = document.querySelectorAll(".ad");

async function getAds() {
    const response = await fetch("https://teddy2j.github.io/wdd230/data/links.json");
    const data = await response.json();
    const members = data.members; //array of objects
    displayAds(members);

}

getAds();


function displayAds(members) {
    const ads = get3RamdomMembers(members);
    ads.forEach(ad => {

        const elementsGroup = document.querySelectorAll(".ad"); //it will return an array of 3 references for the 3 html elements of class "ad"
        elementsGroup.forEach(elementGroup => {

            //creating html elements
            const name = document.createElement('h3');
            const img = document.createElement("img");
            const membership = document.createElement("h4");

            //creating elements' content
            name.innerText = ad.name;
            const filepath = `../${ad.image}`;
            img.setAttribute("src", filepath);
            membership.innerText = ad.membership;



            //appending
            for (let i = 1; i <= 3; i++) {
                elementGroup[i].appendChild(name);
                elementGroup[i].appendChild(img);
                elementGroup[i].appendChild(membership)
            }

        });

    });


}

//get an array of objects, outputs another array of objects. It takes 3 random objects from an array of 7 objects.
function get3RamdomMembers(members) {

    //this is what i'll return. An array of 3 objects.
    const group = [];


    const randomNumbers = return3RandomNumbers();

    for (let i = 0; i <= randomNumbers.length; i++) {
        group.push(members[randomNumbers[i]]);
    }

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
    return randomNumbers;

}
