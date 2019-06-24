const name = 'Marcin';
let number = 5;

console.log(`Moje imie to: ${name} 
a liczba: ${number}`);

const header = document.querySelector('.header');
console.log(header);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs[2]);
console.log(paragraphs[2].innerHTML);

paragraphs[2].innerHTML = "Pozdro JS"
