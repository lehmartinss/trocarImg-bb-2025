"use strict"

let imagensCarros = ""
let trocar = 0;

const botaoTrocarImg =  document.getElementById('trocar-img')

function trocarImagem() {
    if(trocar == 7){
        trocar = 0
    }
 
  trocar++
  imagensCarros = `url(./carro${trocar}.webp)`
  console.log(imagensCarros);
  
  document.documentElement.style.setProperty('--carro-fundo', imagensCarros)

}

botaoTrocarImg.addEventListener('click', trocarImagem)