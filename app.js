var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");


function clickEventHandler() {
    outputDiv.innerText = "translated message in banana :-> " + txtInput.value;
}
btnTranslate.addEventListener("click", clickEventHandler);