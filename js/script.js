// console.log('Ура! Заработало!!!');

const header = document.querySelector('.siteHeader');
const spider = document.querySelector('.spider');


document.querySelector('.showOn').onchange = function(){
    if (this.checked){
        header.classList.add('siteHeaderBg');
    }
    else{
        header.classList.remove('siteHeaderBg');
    }
}