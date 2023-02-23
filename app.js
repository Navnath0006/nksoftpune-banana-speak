var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "	https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text
}
function errorHander(error) {
    console.log("error occured ", error);
    alert("Somthing wrong with servers!!! try after some time");

}

function clickEventHandler() {
    // outputDiv.innerText = "translated message in banana :-> " + txtInput.value;
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        //.then(json => console.log(json.contents.translated))
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHander);
}
btnTranslate.addEventListener("click", clickEventHandler);