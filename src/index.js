import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// // var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler() {
  console.log("Something went wrong with the server, try again later");
}

function clickHandler() {
  console.log(txtInput.value);
  var inputText = txtInput.value;

  // calling URL function to generate translated text
  // i.e we are calling the server api
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler());
  // console.log(getTranslationURL(inputText));
}

// function errorHandler() {
//     console.log("error occurred", error);
//     alert("something went wrong with the server! try again after some time")
// }

// function clickHandler() {
//     // outputDiv.innerText = "Translated : " + txtInput.value;
//     var inputText = txtInput.value;

//     //calling server for processing
//     fetch(getTranslationURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             outputDiv.innerText = translatedText
//         })
//         .catch(errorHandler);
// }

btnTranslate.addEventListener("click", clickHandler);
