/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/

const playWinthWord = {

  elementTextInput: null,
  elementTextOutput: null,
  optionAdhered: null,

  //FUNCSIONS

  setTxt: (elmentText) => {
    (this.elementTextInput = elmentText.impTxt),
    (this.elementTextOutput = elmentText.outTxt);
  },

  setOpsions: (kay)=>{

    switch (kay) {
      case "1": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "2": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "3": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "4": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "5": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "6": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "7": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "8": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }
      case "9": {
       
        this.elementTextOutput.value = kay;
        
        break;
      }

      default:
        break;
    }
  }
      
   

};
