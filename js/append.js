// 1.where to add
const placesList = document.getElementById('places-list');
// 2.what to do be added
const li = document.createElement('li');
li.innerText = 'pahirtoli Bon';
//3. add the child
placesList.appendChild(li);

// 1.where to add
const mainConainer = document.getElementById('main-container');
// console.log(mainConainer);
// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
section.style.backgroundColor = 'green';
section.style.borderRadius = '20px';
section.style.padding = '20px';


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);

mainConainer.appendChild(section);

// set inner html directly
const sectinDress = document.createElement('section');
sectinDress.innerHTML = `
    <h1>My Dress section </h1>
    <ul>
    <li>T-shirt</li>
    <li>Plot t-shirt</li>
    <li>Pent</li>
    </ul>
`
mainConainer.appendChild(sectinDress);