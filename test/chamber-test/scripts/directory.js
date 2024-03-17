const membersLink = "https://teddy2j.github.io/wdd230/chamber/data/members.json"

async function getMembers() {
    const response = await fetch(membersLink);
    const data = await response.json();
    displayMembers(data);
}

getMembers();

function displayMembers(data) {
    let article = document.querySelector("article");
    data.members.forEach(element => {
        let section = document.createElement("section");

        const img = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");
        const schedule = document.createElement("p");

        img.setAttribute("src", element.image);
        name.innerHTML = element.name;
        address.innerHTML = element.address;
        phone.innerHTML = element.phone;
        website.innerHTML = element.website;
        website.setAttribute("href", element.website);
        membership.innerHTML = element.membership;
        schedule.innerHTML = element.schedule;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(membership);
        section.appendChild(schedule);

        article.appendChild(section);



    });
}


