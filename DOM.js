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

const sectionsWithH2 = document.querySelectorAll('section:has(h2)');
console.log(sectionsWithH2)