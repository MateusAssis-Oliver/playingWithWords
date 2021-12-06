"use strict";

var modTxt = {
  reveese: function reveese(txt) {
    var reverse = txt.split("").reverse().join('');
    return reverse;
  },
  UppercaseLowercase: function UppercaseLowercase(txt) {
    return txt.toUpperCase();
  },
  RemoveDuplicateLines: function RemoveDuplicateLines() {
    /* ... */
  },
  AlphabeticalOrder: function AlphabeticalOrder() {
    /* ... */
  },
  UpsideDown: function UpsideDown() {
    /* ... */
  },
  DifferentLetters: function DifferentLetters() {
    /* ... */
  },
  StackedLetters: function StackedLetters() {
    /* ... */
  },
  SynonymousTexts: function SynonymousTexts() {
    /* ... */
  },
  FindReplace: function FindReplace() {
    /* ... */
  }
};
console.log("1 - UppercaseLowercase - ".concat(modTxt.UppercaseLowercase("mateus"), "\n2 - reveese ").concat(modTxt.reveese("Thiago Assis OLiveira")));