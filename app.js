var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Shreyansh Faye"


console.log(outputDiv)

function clickhandler(){
    outputDiv.innerText = "adsdfsdgd " + txtInput.value
}

btnTranslate.addEventListener("click", clickhandler)