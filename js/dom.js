const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '20px';
    // section.style.width = '200px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'
}
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'red';