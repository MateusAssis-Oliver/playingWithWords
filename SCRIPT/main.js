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

  RemoveDuplicateLines = (txt) => {
    let separadorLines = txt.split("\n"),
      /*
    
      Filter clia um novo array com os elemntos que passanram no teste do calbeck,  
      ==> Faz a comparação, indexOf retorna a posição do elemento se ele for encontrado, caso a posição seja igual a posição atual(pos)
      retrona true com isso o filter salva o elemnto internamente, quando a comparação do filter acaba ele retona o array com os elemntos, salvos;
   
    */

      notRepetisons = separadorLines
        .filter((ele, pos) => separadorLines.indexOf(ele) === pos)
        .join("\n");

    return notRepetisons;
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
    this.elementTextInput = elmentText.impTxt;
    this.elementTextOutput = elmentText.outTxt;
    this.modTxt = new ModTxt();
  },

  setOpsions: (kay) => {
    switch (kay) {
      case "1": {
        console.log(
          (this.elementTextOutput.value = this.modTxt.reveese(
            elementTextInput.value
          ))
        );

        break;
      }
      case "2": {
        /* O  UppercaseLowercase retorna em CAIXA ALTA a cadeia de caracteres recebida como parametro,*/
        console.log(
          (this.elementTextOutput.value = modTxt.UppercaseLowercase(
            elementTextInput.value
          ))
        );

        break;
      }
      case "3": {
        console.log(
          (this.elementTextOutput.value = modTxt.RemoveDuplicateLines(
            this.elementTextInput.value
          ))
        );

        break;
      }
      case "4": {
        this.elementTextOutput.value = modTxt.AlphabeticalOrder(
          this.elementTextInput.value
        );

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
