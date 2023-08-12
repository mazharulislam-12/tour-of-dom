const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const firstSection = document.getElementById('first-section');
console.log(firstSection);
firstSection.style.color = 'white';
firstSection.style.background = 'blue';
firstSection.style.borderRadius = '20px';
firstSection.style.padding = '20px';


const secondList = document.getElementById('second-list');
const li = document.createElement ('li');
li.innerText = 'My dynamic list'
secondList.appendChild(li);
