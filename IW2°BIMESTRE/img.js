let arrayImagens = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg","img05.jpg","img06.jpg"];
let intervalId;
real = true
window.onload = () => {
    // nomes das imagens com a extensão
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[0];
    img[1].src = "img/" + arrayImagens[0];
    img[2].src = "img/" + arrayImagens[1];
    img[3].src = "img/" + arrayImagens[2];      
    img[4].src = "img/" + arrayImagens[3];
    img[5].src = "img/" + arrayImagens[4];    
    img[6].src = "img/" + arrayImagens[5];   
    if (real) {
        intervalId = setInterval(Testa, 500);   
    }
    img[1].addEventListener('mouseover', stopInterval);
    img[1].addEventListener('mouseout', startInterval);     
    img[2].addEventListener('mouseover', stopInterval);
    img[2].addEventListener('mouseout', startInterval);     
    img[3].addEventListener('mouseover', stopInterval);
    img[3].addEventListener('mouseout', startInterval);     
    img[4].addEventListener('mouseover', stopInterval);
    img[4].addEventListener('mouseout', startInterval);     
    img[5].addEventListener('mouseover', stopInterval);
    img[5].addEventListener('mouseout', startInterval);     
}


//contador de segundos

//função q troca a imagem a cada segundo
let cont = 1;
function Testa(){
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[cont];
    cont++; 
    if(cont == 6){
        cont = 0
    }
}
function stopInterval() {
    clearInterval(intervalId);
}

function startInterval() {
    if (!real) {
        intervalId = setInterval(Testa, 3000);
        real = true;
    }
}
function img01() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[0];
    real = false
    stopInterval();

  
}   
function img02() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[1];
    real = false
    stopInterval();
}

function img03() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[2];
    real = false
    stopInterval();

}
function img04() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[3];
    real = false
    stopInterval();

}
function img05() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[4];
    real = false;
    stopInterval();
}
function img06() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[5];
    real = false
    stopInterval();
}