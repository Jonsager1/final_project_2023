let selection;
let userInputtedLanguage;
let userTranslatedLanguage;

function onStart() {
    // Declaring the Variable that will allow the programmer to inject the necessary list and translation features.
    let translationNavBar = document.getElementById("translationNavBar");

    // Injecting the necessary list and declaring each individual piece that will be needed for the user.
    translationNavBar.innerHTML +=
        `<ul class="selectionBar">
            <li>
                <select id="userInputLanguage"></select>
            </li>

            <li>
                <span class="material-symbols-outlined">sync_alt</span>
            </li>
            <li>
                <select id="userOutputtedLanguage"></select>
            </li>
      </ul>`

    // Using the variable that we declared above and allowing the programmer to get both of the select elements.
    selection = document.querySelectorAll("select");

    // Calling the function below.
    populateDrops();
}


function populateDrops() {

    // Using the selection variable above to allow us to loop through each country. 
    // While this is happening we are declaring a variable that we will inject an option element inside of the select element when the loop is running.
    selection.forEach(element => {
        for (let list in countries) {
            console.log(countries[list]);
            let option = `<option value="${list}">${countries[list]}</option>`;
            console.log(option);
            element.insertAdjacentHTML("beforeend", option);
        }
    });
}


function startTranslation() {
    // Declaring variables to store all the necessary inputs that we will need for the API.
    let userInputtedTxt = document.getElementById("userInputtedTxt").value;
    // console.log(userInputtedTxt);

    if (userInputtedTxt != null && userInputtedTxt != undefined && userInputtedTxt != "") {
        let storedValue = userInputtedTxt;
        let userInputtedLanguage = selection[0].value;
        let userTranslatedLanguage = selection[1].value;
        console.log(storedValue, userInputtedLanguage, userTranslatedLanguage);
    } else {
        console.log("Failed");
        alert("Please Enter Valid Text to be Translated");
    }
}