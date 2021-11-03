function onOptionSeleted(){

      let elemetoClicado = idElement.target;

      elemetoClicado.value = "on";

      console.log(elemetoClicado);

      selectedOption.removeEventListener("click", onOptionSeleted(idELement));
}