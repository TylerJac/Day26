const firstHeader = document.querySelector('header')
console.log(firstHeader);

const allSections = document.querySelectorAll('section')
console.log(allSections);

const currentSection = document.querySelector('section.current');
console.log(currentSection);

const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

const prevSection = currentSection.previousElementSibling.querySelector('h2');
console.log(prevSection);

const getDiv = document.querySelector('h2.highlight').closest('div');
console.log(getDiv);

const sectionsWithH2 = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement}) 
console.log(sectionsWithH2)