let stringOutputDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
let stringActionButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('stringActionButton');
stringActionButton.addEventListener("click", function () {
    let userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('stringInput');
    let userActionType: HTMLSelectElement = <HTMLSelectElement>document.getElementById('actionType');
    switch (userActionType.value) {
        case "toUpperCase":
            stringOutputDiv.innerHTML = userInput.value.toUpperCase();
            break;
        case "toLowerCase":
            stringOutputDiv.innerHTML = userInput.value.toLowerCase();
            break;
    }
});