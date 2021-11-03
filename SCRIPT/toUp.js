function toUp(params) {
    
    console.log(params);

    if(params.funcaoEscolhida === '1'){ return params.txt.toUpperCase(); }
    else{ return '-1'};
};


function reverseTxt(parametro){

 
    let txtMod =  parametro
      .txt /* conteudo do objeto a ser modificado*/
      .split("") /* separando as letras como se fosse um array ['a',' ','b','c']*/
      .reverse() /*revertendo ['c','b',' ','a']*/
      .join('')/* juntando as letras do array cb a*/,
      txtModReverse
      ;

    for (let index = txtMod,length; ind >= 0; index--) {}

}




let 
    objBlocoTxt = {

    txt :'Texte de reversão',
    funcaoEscolhida : '2'
    };


//console.log(toUp(objBlocoTxt));
console.table(reverseTxt(objBlocoTxt));