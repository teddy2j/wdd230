const baseURL = "https://teddy2j.github.io/wdd230/";
const linksURL = "https://teddy2j.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);

}

getLinks();

function displayLinks(weeks) {
    let oList = document.getElementById("links");
    weeks.lessons.forEach(element => {
        const list = document.createElement("li");
        element.links.forEach(link => {
            let a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.innerHTML = `${link.title} | `;
            list.appendChild(a);
        });
        oList.appendChild(list);

    });

};

