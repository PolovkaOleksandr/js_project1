const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    } , 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    } , 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    } , 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    } , 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    } , 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    } , 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    } , 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    } , 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    } , 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    } , 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    } , 
    { 
        name: "Hamster", 
        surname: "Combat", 
        born: 2024, 
        dead: 0, 
        id: 12 
    }
];

    let btn19st=document.querySelector(".btn19st");
    btn19st.addEventListener("click", bornIn19thCentury );
    let btnAE=document.querySelector(".btnAE");
    btnAE.addEventListener("click", AEborn );
    let btnAlf=document.querySelector(".btnAlf");
    btnAlf.addEventListener("click", sortAlf );

        const listElement = document.querySelector('.ss-list');

        
function bornIn19thCentury(){
    listElement.textContent="" ;
    scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900).forEach(scientist => {
        let listItem = document.createElement('li');
        listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`;
        listElement.appendChild(listItem);
    });
    
}
//Знайти рік народження Albert Einshtein
function AEborn () {
    listElement.textContent="" ;
    const AEfind= scientists.find(scientist=> scientist.name=="Albert" && scientist.surname=="Einstein")
    let listItem = document.createElement('li');
        listItem.textContent = AEfind.born
        listElement.appendChild(listItem);
};

//Відсортувати вчених за алфавітом
function sortAlf() {
    listElement.textContent="" ;
    const mapAlf= scientists.map(scientist=>scientist.name)
    let listItem = document.createElement('li');
        listItem.textContent = mapAlf.sort()
        listElement.appendChild(listItem);
}

