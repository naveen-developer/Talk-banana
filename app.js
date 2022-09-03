var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("Error occured",error);
    alert("Something went wrong with server : try again after some time");
}

function clickHandler() {
    outputDiv.innerText="Loading...";
    var textInput = txtInput.value;
    if(textInput==""){
        outputDiv.innerHTML="Please enter some text!";
    } else{
        fetch(getTranslationURL(textInput))
        .then(response => response.json())
        // .then(json => console.log(json.contents.translated))
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
    }
}

function clearHandler() {
    outputDiv.innerHTML="";
    txtInput.value="";
}

btnTranslate.addEventListener("click", clickHandler);
btnClear.addEventListener("click", clearHandler);