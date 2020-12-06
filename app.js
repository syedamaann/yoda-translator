var translateButton = document.querySelector("#translate-button");
var inputText = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output-div");


var serverURL = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(urlinputtext) {
    return serverURL + "?" + "text=" + urlinputtext
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server is facing some issues. Come back later!")
}

function clickHandler() {
    var inputTexturl = inputText.value; 

    fetch(getTranslationURL(inputTexturl))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler)
