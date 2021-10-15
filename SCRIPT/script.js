/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/


let functionText={

getTextboxInput(){
  return document.getElementById("boxInput").value;
}


}

/* Pegando conteu dentro do campo de texto */

let textInput = document.getElementById("toSend"),
    selectedOption = document.getElementById("functions");


/* Opção selecionada pelo usuario */
selectedOption.addEventListener("click", (idElement) => {

    let idElementClick = idElement.target.id;



});

/* Disparando a função que ira pegar os valores digitados no campo digitado */
textInput.addEventListener("click", () => {
  
  functionText.getTextboxInput();


});
