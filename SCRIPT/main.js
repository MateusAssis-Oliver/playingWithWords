/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/

class ModTxt {
  constructor() {}

  reveese = (txt) => {
    let reverse = txt.split("").reverse().join("");

    return reverse;
  };

  UppercaseLowercase = (txt) => {
    let upperCase_Lowercase = txt.toUpperCase();

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
    (this.elementTextInput = elmentText.impTxt);
    (this.elementTextOutput = elmentText.outTxt);
    (this.modTxt = new ModTxt());
  },

  setOpsions: (kay) => {
    switch (kay) {
      case "1": {
        let a = this.modTxt.reveese(elementTextInput.value);

        this.elementTextOutput.value = a;

        console.log(a);

        break;
      }
      case "2": {
        let b = modTxt.UppercaseLowercase(elementTextInput.value);
        this.elementTextOutput.value = b;
        console.log(b);
        break;
      }
      case "3": {
        
        let c = this.elementTextOutput.value.split(",");
        console.log(c)

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
  },
};
