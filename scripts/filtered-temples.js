document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const temp = document.querySelector('#temp');

hamButton.addEventListener('click', () => {
	console.log("click-button")
	temp.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName:"Tokyo Japan Temple",
        location:"Tokyo Japan",
        dedicated:"1980, October, 27-29 ",
        area:53997,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",

    },
    {
        templeName:"Mount Timpanogos Utah Temple",
        location:"American Fork Utah United States",
        dedicated:"1996, October, 13-19",
        area:107240,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg"

    },
    {
        templeName:"San Diego California Temple",
        location:"San Diego California Unaited States",
        dedicated:"1993, April, 25-30",
        area:72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName:"Seul Korea Temple",
        location:"Seoul South Korea",
        dedicated:"1985, December, 14-15",
        area:28057,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
    },
    {
        templeName:"Laie Hawaii Temple",
        location:"Laie Hawaii United States",
        dedicated:"1919, November, 27-30",
        area:42100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName:"Payson Utah Temple",
        location:"Payson Utah United States",
        dedicated:"2015, June, 7",
        area:96630,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
        templeName:"Colonia Juárez Chihuahua Mexico Temple",
        location:"Colonia Juárez, Chihuahua, Mexico",
        dedicated:"1999, March, 6-7",
        area:6800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },
];

createTempleCard(temples);

let homeLink = document.querySelector("#home")
let oldLink = document.querySelector("#old");
let newLink = document.querySelector("#new");
let largeLink = document.querySelector("#large");
let smallLink = document.querySelector("#small");

document.getElementById("home").addEventListener("click", () => {
    createTempleCard(temples);
});

document.getElementById("old").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});


function createTempleCard(filteredTemples) {
    document.querySelector(".temple-gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("div");
        card.classList.add("temple-cards");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = '<span class="label">Location:</span> ${temple.location}';
        dedication.innerHTML = '<span class="labal">Dedicated:</span> ${temple.dedicated}';
        area.innerHTML = '<span class="label">Size:</span> ${temple.area} sq ft';
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", '${temple.templeName} Temple');
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-gallery").appendChild(card);
    });
};

