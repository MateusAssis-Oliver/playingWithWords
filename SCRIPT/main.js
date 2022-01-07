/* 
    Iniciando projeto de modificaçoes de strings

    Desenvolvido por: Mateus de Assis
    Data: 08.09.2021

    versão: 0.0.1


*/

class ModTxt {
  constructor() {}

  arraySemVazios = (array) => {
    let stringSemvazios = array.filter(function (i) {
      if (i === " " || i == "") {
        return false;
      } else {
        return true;
      }
    });

    return stringSemvazios;
  };

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

  AlphabeticalOrder = (txt) => {
    let sepaQuebraLine = txt.split("\n").join(" "),
      sepPalavras = sepaQuebraLine.split(" "),
      arraySemVazios = this.arraySemVazios(sepPalavras);

    return arraySemVazios.sort().join("\n");
  };

  UpsideDown = (aString) => {
    let flipTable = {
      "\u0021": "\u00A1",
      "\u0022": "\u201E",
      "\u0026": "\u214B",
      "\u0027": "\u002C",
      "\u0028": "\u0029",
      "\u002E": "\u02D9",
      "\u0033": "\u0190",
      "\u0034": "\u152D",
      "\u0036": "\u0039",
      "\u0037": "\u2C62",
      "\u003B": "\u061B",
      "\u003C": "\u003E",
      "\u003F": "\u00BF",
      "\u0041": "\u2200",
      "\u0042": "\u10412",
      "\u0043": "\u2183",
      "\u0044": "\u25D6",
      "\u0045": "\u018E",
      "\u0046": "\u2132",
      "\u0047": "\u2141",
      "\u004A": "\u017F",
      "\u004B": "\u22CA",
      "\u004C": "\u2142",
      "\u004D": "\u0057",
      "\u004E": "\u1D0E",
      "\u0050": "\u0500",
      "\u0051": "\u038C",
      "\u0052": "\u1D1A",
      "\u0054": "\u22A5",
      "\u0055": "\u2229",
      "\u0056": "\u1D27",
      "\u0059": "\u2144",
      "\u005B": "\u005D",
      "\u005F": "\u203E",
      "\u0061": "\u0250",
      "\u0062": "\u0071",
      "\u0063": "\u0254",
      "\u0064": "\u0070",
      "\u0065": "\u01DD",
      "\u0066": "\u025F",
      "\u0067": "\u0183",
      "\u0068": "\u0265",
      "\u0069": "\u0131",
      "\u006A": "\u027E",
      "\u006B": "\u029E",
      "\u006C": "\u0283",
      "\u006D": "\u026F",
      "\u006E": "\u0075",
      "\u0072": "\u0279",
      "\u0074": "\u0287",
      "\u0076": "\u028C",
      "\u0077": "\u028D",
      "\u0079": "\u028E",
      "\u007B": "\u007D",
      "\u203F": "\u2040",
      "\u2045": "\u2046",
      "\u2234": "\u2235",
    };

    return String(aString)
      .split("")
      .map((c) => flipTable[c] || c)
      .reverse()
      .join("");
  };


  containerFontes = ()=>{
    let fonts = ["MoonDance", "Rock3D", "Monoton", "cocacola","Comforter", "insta"],
    conatainerFontes = document.createElement('div'),
    divSpan = null,
    divPaiSpan =null;
    conatainerFontes.className = "ContainerFonts";
    conatainerFontes.id = "ContainerFonts";
    conatainerFontes.style.display = "none";

    for (const key in fonts) {
      
      divPaiSpan = document.createElement("p");
      divSpan = document.createElement("span");
      
      divSpan.id = fonts[key];
      divSpan.className = "fontes";
      divSpan.textContent = `${fonts[key]}`

      divPaiSpan.append(divSpan);
      conatainerFontes.append(divPaiSpan);

    }

    return conatainerFontes;


  }

  escondeEsconde = (objElementos) => {
    /* 
      Verificardor Ternario, Altera o etsado da caixa de txt Output, assim deixando o "Espaço Vazio",
      para poder inserir Uma div que sera criada e retornada pela função containerFontes
    */
  

      if (objElementos.elementTextOutput.style.display === "none") {
        objElementos.elementTextOutput.style.display = "block"
        objElementos.containerImpuOutput.lastChild.style.display = "none";

      } else {
        objElementos.elementTextOutput.style.display = "none"
        objElementos.containerImpuOutput.lastChild.style.display = "block";

      }

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

//---------------------------------------------------------------------------------------------------------------------------------------------------

const playWinthWord = {
  elementTextInput: null,
  elementTextOutput: null,
  containerImpuOutput: null,
  optionAdhered: null,
  modTxt: null,
  flip: null,

  setTxt: (element) => {
    this.elementTextInput = element.impTxt;
    this.elementTextOutput = element.outTxt;
    this.modTxt = new ModTxt();
    this.containerImpuOutput = element.containerText;
  },

  setOpsions: (kay) => {
    switch (kay) {
      case "1": {
        console.log(
          (this.elementTextOutput.value = this.modTxt.reveese(
            elementTextInput.value
          ))
        );

        this.containerImpuOutput.break;
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
        console.log(
          (this.elementTextOutput.value = modTxt.AlphabeticalOrder(
            this.elementTextInput.value
          ))
        );

        break;
      }
      case "5": {
        console.log(
          (this.elementTextOutput.value = modTxt.UpsideDown(
            this.elementTextInput.value
          ))
        );

        break;
      }
      case "6": {
        

        console.log(containerImpuOutput.lastElementChild.id);

        if (containerImpuOutput.lastElementChild.id != "ContainerFonts") {
          let conatinerEspan = this.modTxt.containerFontes();
          this.containerImpuOutput.append(conatinerEspan);
        }

        

        this.modTxt.escondeEsconde({
          containerImpuOutput:this.containerImpuOutput,
          elementTextOutput:this.elementTextOutput
        });
        

        


        /* 
        1 - Esconder o bloco de output; - OK
        2 - criar um cotainer contendo span; - OK
        3 - Nomear as clas dos span com o nome das fontrs que estão contidas em um array - OK
        4 - Mostrar para o ususario - OK
        5 -tirar as duplicadas que ficam quando clico. - ok
        
        */

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
