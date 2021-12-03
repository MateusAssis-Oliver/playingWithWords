"use strict";

var _this = void 0;

/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/
var playWinthWord = {
  elementTextInput: null,
  elementTextOutput: null,
  optionAdhered: null,
  //FUNCSIONS
  setTxt: function setTxt(elmentText) {
    _this.elementTextInput = elmentText.impTxt, _this.elementTextOutput = elmentText.outTxt;
  },
  setOpsions: function setOpsions(kay) {
    switch (kay) {
      case "1":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "2":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "3":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "4":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "5":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "6":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "7":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "8":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      case "9":
        {
          _this.elementTextOutput.value = kay;
          break;
        }

      default:
        break;
    }
  }
};