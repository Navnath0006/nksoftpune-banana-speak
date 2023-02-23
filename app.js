var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");
console.log(txtInput);

function clickEventHandler() {
    console.log("translate button clicked");
    console.log("input : ", txtInput.value);
}
btnTranslate.addEventListener("click", clickEventHandler);