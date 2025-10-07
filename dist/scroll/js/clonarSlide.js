const carousel = document.querySelector('#carousel')
const slides = document.querySelector('#slides')
// clonando a div 

const slidesClone = slides.cloneNode(true)

// adicionar o clone no fim do carousel

carousel.appendChild(slidesClone)