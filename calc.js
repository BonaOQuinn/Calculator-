/*calc.js*/


/*calculator button function*/

let body = document.querySelector(".body"); 

// functions for basic operations
function add(num1, num2) {
    return num1 + num2; 
}

function sub(num1, num2) {
    return num1 - num2; 
}

function mult(num1, num2) {
    return num1 * num2; 
}

function division(num1, num2) {
    return num1 / num2; 
}

// operator function
function operator(op, num1, num2) {
    switch (op) {
        case "+": return num1 + num2; 
        case "-": return num1 - num2; 
        case "*": return num1 * num2; 
        case "/": return num1 / num2; 
        default: return "INVALID"; 
    }
}

// variables for operator implementation
let num1 = null;
let num2 = null;
let op = null; 
let equal = false; 
let result = null;

let bpush = document.querySelectorAll(".button");
let displayCont = document.querySelector(".head-items"); 

bpush.forEach(button => {
    button.addEventListener("click", event => {
        button.classList.toggle('pushed');
        setTimeout(() => {
            button.classList.remove('pushed'); 
        }, 65);

        const value = event.target.textContent;

        // operator buttons
        if (event.target.id === "division" || event.target.id === "multiplication" || event.target.id === "addition" || event.target.id === "sub") {
            num1 = Number(displayCont.textContent); // capture first number
            displayCont.textContent = "";           // clear for second number

            // show operator symbol
            let newImg = document.createElement('img'); 
            if (event.target.id === "division") {
                newImg.src = 'division.svg'; 
                op = "/";
            } else if (event.target.id === "multiplication") {
                newImg.src = 'multiplication.svg'; 
                op = "*";
            } else if (event.target.id === "addition") {
                newImg.src = 'addition-sign.png'; 
                op = "+";
            } else if (event.target.id === "sub") {
                newImg.src = 'minus.svg'; 
                op = "-";
            }
            newImg.classList.add("imgDisplay");
            displayCont.appendChild(newImg);
        }

        // clear button
        else if (value === "clear") {
            let removeImgs = document.querySelectorAll('.imgDisplay'); 
            removeImgs.forEach(image => displayCont.removeChild(image)); 

            let removeText = document.querySelectorAll('.textDisplay'); 
            removeText.forEach(text => displayCont.removeChild(text)); 

            num1 = null;
            num2 = null;
            op = null;
            equal = false;
            result = null;
            displayCont.textContent = "";
        }

        // equal button
        else if (event.target.id === "equal") {
            num2 = Number(displayCont.textContent); 
            result = operator(op, num1, num2);

            displayCont.textContent = ""; // clear old
            let resultDisplay = document.createElement("div"); 
            resultDisplay.textContent = result; 
            resultDisplay.classList.add("head-items"); 
            displayCont.appendChild(resultDisplay);

            equal = true; 
        }

        else if(event.target.id === 'neg') {
            let negSign = document.createElement("div"); 
            negSign.textContent = "-"; 
            negSign.classList.toggle('head-items'); 
            displayCont.prepend(negSign);
        }

        else if(event.target.id === 'back') {
            displayCont.textContent = displayCont.textContent.slice(0, -1);
        }

        // number buttons
        else {
            displayCont.textContent += value; // append number to screen
        }
    })
});
