const modTxt = {

    reveese:(txt)=>{
    
        let reverse = txt.split("").reverse().join('');

        return reverse;
    },
    UppercaseLowercase:(txt)=>{
        
        return txt.toUpperCase();
    },
    RemoveDuplicateLines:()=>{
        /* ... */
    },
    AlphabeticalOrder:()=>{
        /* ... */
    },
    UpsideDown:()=>{
        /* ... */
    },
    DifferentLetters:()=>{
        /* ... */
    },
    StackedLetters:()=>{
        /* ... */
    },
    SynonymousTexts:()=>{
        /* ... */
    },
    FindReplace:()=>{
        /* ... */
    }
}
console.log(`1 - UppercaseLowercase - ${modTxt.UppercaseLowercase("mateus")}
2 - reveese ${modTxt.reveese("Thiago Assis OLiveira")}`);