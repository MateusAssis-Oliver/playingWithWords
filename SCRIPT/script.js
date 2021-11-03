/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/

let functionText={

  optionSelected(option){

    let key = option;

    switch (key) {

      case "1": {

        break;
      }

      case "2": {

        console.log(`entrou no case ${key}`);
        break;
      }

      case "3": {

        console.log(`entrou no case ${key}`);

        break;
      }

      case "4": {

        console.log(`entrou no case ${key}`);
        
        break;
      }

      case "5": {
        
        console.log(`entrou no case ${key}`);

        break;
      }

      case "6": {
        
        console.log(`entrou no case ${key}`);

        break;
      }

      case "7": {
        
        console.log(`entrou no case ${key}`)
        
        break;
      }

      case "8": {
        
        console.log(`entrou no case ${key}`);

        break;
      }

      case "9": {
        
        console.log(`entrou no case ${key}`);

        break;
      }

      default:
      
      console.log(`Algo deu muito errado kkkk`);
      
      break;
    }


  },

  /* Pega o testo digitado e retona o texto e a opção */

  getTextboxInput(){
    
    let textDoblocoDeImput =  document.getElementById("boxInput").value,
        opcaoSelecionada = '1'

        return {
          textDoblocoDeImput,
          opcaoSelecionada
        }
  }
}


/* Pegando conteu dentro do campo de texto */

let textInput = document.getElementById("toSend"),
    selectedOption = document.getElementById("functions");


/* Opção selecionada pelo usuario */

selectedOption.addEventListener("click", function onOptionSeleted(e){


  let ,elemento = {
    nome : e.target.id,
    value : e.target.value,

  }


  console.log(elemento)
});



/* Disparando a função que ira pegar os valores digitados no campo digitado */
textInput.addEventListener("click", () => {
  
  functionText.getTextboxInput()

});


let boxFunctions = document.getElementsByClassName("boxFunctions");