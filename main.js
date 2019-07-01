const name = 'Marcin';
let number = 5;

console.log(`Moje imie to: ${name} 
a liczba: ${number}`);

const header = document.querySelector('.header__title--js');
console.log(header);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs[2]);
console.log(paragraphs[2].innerHTML);

paragraphs[2].innerHTML = "Pozdro JS"

const button = document.querySelector('.navigation__button--js');
let a=0;


button.addEventListener('click', (e)=>{
    
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    if(a%2==0)
    button.innerHTML = "&#10005";
    else
    button.innerHTML = "&#9776;";
    a++;
    console.log(e);
})

