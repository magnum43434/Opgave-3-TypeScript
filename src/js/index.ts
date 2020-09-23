let stringInput: HTMLInputElement = <HTMLInputElement>document.getElementById('stringInput');
let actionType: HTMLSelectElement = <HTMLSelectElement>document.getElementById('actionType');
let stringOutputDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
let stringActionButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('stringActionButton');
stringActionButton.addEventListener("click", function () {
    let userInput = stringInput.value;
    let userActionType = actionType.value;
    switch (userActionType) {
        case "toUpperCase":
            stringOutputDiv.innerHTML = userInput.toUpperCase();
            break;
        case "toLowerCase":
            stringOutputDiv.innerHTML = userInput.toLowerCase();
            break;
    }
});