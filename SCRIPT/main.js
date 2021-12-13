/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/


class ModTxt {

  constructor(txt) {
    this.txt = txt;
  }

  reveese = () => {
    let reverse = this.txt.split("").reverse().join("");

    return reverse;
  };

  UppercaseLowercase = () => {
    
    let upperCase_Lowercase = this.txt.toUpperCase();
    
    return upperCase_Lowercase;
  };
  RemoveDuplicateLines = () => {
    /* ... */
  };
  AlphabeticalOrder = () => {
    /* ... */
  };
  UpsideDown = () => {
    /* ... */
  };
  DifferentLetters = () => {
    /* ... */
  };
  StackedLetters = () => {
    /* ... */
  };
  SynonymousTexts = () => {
    /* ... */
  };
  FindReplace = () => {
    /* ... */
  };
}


const playWinthWord = {
  
  elementTextInput: null,
  elementTextOutput: null,
  optionAdhered: null,
  modTxt: null,

  setTxt: (elmentText) => {

    (this.elementTextInput = elmentText.impTxt),
    (this.elementTextOutput = elmentText.outTxt),
    (this.modTxt = new ModTxt(elmentText.impTxt.value));
  },

  setOpsions: (kay)=> {
    
    switch (kay) {
    case "1": {
      let a = this.modTxt.reveese(this.elementTextInput);

      console.log(a)
      
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


