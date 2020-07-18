const monthDictionary = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const eventsDictionary = [{
      "id": "01",
      "name": "Rave Autumn",
      "date": "14.09.2019",
      "city": "Amsterdam",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    }, {
      "id": "02",
      "name": "Best of 2019",
      "date": "20.09.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
    }, {
      "id": "03",
      "name": "Faderhead",
      "date": "10.11.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
    }, {
      "id": "04",
      "name": "Purple Fog Side",
      "date": "05.06.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png"
    }, {
      "id": "05",
      "name": "Carbon based Liveform",
      "date": "14.02.2019",
      "city": "Sr.Petersburg",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/b1f06edaf618c3e3ad19c159eb5aa036.jpeg"
    }, {
      "id": "06",
      "name": "Neuroticfish",
      "date": "25.05.2019",
      "city": "Sr.Petersburg",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/49705480ff397085ad34685c4181c1ab.jpeg"
    }, {
      "id": "07",
      "name": "Faderhead",
      "date": "20.11.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/de9f4b49cc5ba737911b0db30f082fff.jpeg"
    }, {
      "id": "08",
      "name": "Rave Winter",
      "date": "15.02.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    }, {
      "id": "09",
      "name": "Not a Robot",
      "date": "22.06.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/14bce6211e055410a043e02a22cec69b.jpeg"
    }, {
      "id": "10",
      "name": "Carbon Based lifeforms",
      "date": "22.09.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/7d655ea8b13f5fdda4469fb0035bd7a3.jpeg"
    }, {
      "id": "11",
      "name": "Icon of Coil",
      "date": "19.05.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/8c76c770ded42cea343dbf2d8523791e.jpeg"
    }, {
      "id": "12",
      "name": "Solar Fields",
      "date": "20.06.2019",
      "city": "Sr.Petersburg",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/9ddae28837d2e4217e5c2e99bbd6f3a0.jpeg"
    }, {
      "id": "13",
      "name": "Apoptygma Berzerk",
      "date": "14.11.2019",
      "city": "Amsterdam",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/720e3b29bf238cd40785ffe157b1151a.jpeg"
    }, {
      "id": "14",
      "name": "Mental Discipline",
      "date": "16.11.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/76372b51ab7408e826a191577abcd79d.jpeg"
    }, {
      "id": "15",
      "name": "Apoptygma Berzerk",
      "date": "25.02.2019",
      "city": "Berlin",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/aec8583caa5bbe34b2c5695e2546ea3b.jpeg"
    }, {
      "id": "16",
      "name": "Solar Fields",
      "date": "14.02.2019",
      "city": "Amsterdam",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/0662c0df7663f71831e83be091228413.jpeg"
}];

function getUnic(arr) {
    let result = [ ];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
};

function getAllPlaces() {
    return getUnic(eventsDictionary.map(event => event.city));
};

function getAllMonth() {
    return getUnic(eventsDictionary.map(event => event.date.split('.')[1]));
}

function setCitiesSelector(cities) {
    let selector = document.getElementById('cities-selector');

    let optionsList = `<option value="All" selected>All</option>
    `;

    cities.forEach(city => {
        optionsList += `<option value="${ city }" selected>${ city }</option>
        `;
    });

    selector.innerHTML = optionsList;
    selector.addEventListener('change', updateCards);
};

function setMonthSelector(months) {
    let selector = document.getElementById('months-selector');

    let optionsList = `<option value="All" selected>All</option>
    `;

    months.forEach(month => {
        optionsList += `<option value="${ month }" selected>${ monthDictionary[parseInt(month)] }</option>
        `;
    });

    selector.innerHTML = optionsList;
    selector.addEventListener('change', updateCards);
}

function getCityValue() {
    let citySelector = document.getElementById('cities-selector');
    return citySelector.value;
};

function getMonthValue() {
    let monthSelector = document.getElementById('months-selector');
    return monthSelector.value;
};

function getEvents(city, month) {
    return eventsDictionary.filter(event => (city === "All" || event.city === city) && (month === "All" || month === event.date.split('.')[1]));
};

function setCards(events) {
    let contentContainer = document.getElementById('content-place');
    contentContainer.innerHTML = "";

    events.forEach(event => {
        let card = document.createElement('div');
        card.classList.add('main-content-item');
        card.style.backgroundImage = 'url(' + event.image + ')';
        card.style.backgroundSize = 'cover';

        let cardContent = `
                <div class="content-item-date">
                    <span>${ parseInt(event.date.split('.')[0]) }</span>
                </div>
                <div class="content-item-bookmark">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="content-item-title">
                    <span>${ event.name }</span>
                </div>
        `;

        card.innerHTML = cardContent;
        contentContainer.appendChild(card);
    });
}

function updateCards() {
    let city = getCityValue();
    let month = getMonthValue();
    let events = getEvents(city, month);
    setCards(events);
};

const cities = getAllPlaces();
const months = getAllMonth();

window.onload = () => {
    setCitiesSelector(cities);
    setMonthSelector(months);

    updateCards();
}