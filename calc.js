/*calc.js*/


/*calculator button function*/

let body = document.querySelector(".body"); 


//function for addition 
function add(num1, num2) {
    return num1 + num2; 

}


//function for subtraction 
function sub(num1, num2) {
    return num1 - num2; 
}



//function for multiplication 
function mult(num1, num2) {
    return num1 * num2; 
}



//function for division 

function division(num1, num2) {
    return num1 / num2; 
}



//operator function 
/* 
3 parameters: 2 nums / operator symbol 
returns num1 (op) num2
*/

function operator(op, num1, num2) {
    switch (op) {
        case "+":
            return num1 + num2; 
            break; 
        case "-": 
            return num1 - num2; 
            break; 
        case "*": 
            return num1 * num2;
            break; 
        case "/": 
            return num1 / num2; 
            break;
        default: 
            return "INVALID"; 
            break; 
    }
}


/*
populating calculator window with the corresponding button:

psuedo:
-create nodelist with all the buttons on calculator
-access text value of each button and store in a variable 
-create new elements to hold values of the button that was clicked
-add values to element text content
-add elements to head-items
*/

let bpush = document.querySelectorAll(".button");
let displayCont = document.querySelector(".head-items"); 

bpush.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.id == "division") {
            let newImg = document.createElement('img'); 
            newImg.src = 'division.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
        }

        else if (event.target.id == "multiplication") {
            let newImg = document.createElement('img'); 
            newImg.src = 'multiplication.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
        }


        else if (event.target.id == "addition") {
            let newImg = document.createElement('img'); 
            newImg.src = 'addition-sign.png'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
        }


        else if (event.target.id == "sub") {
            let newImg = document.createElement('img'); 
            newImg.src = 'minus.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
        }

        else if (event.target.textContent == "clear") {
            let removeImgs = document.querySelectorAll('.imgDisplay'); 
            removeImgs.forEach(image => {
                displayCont.removeChild(image); 
            })

            let removeText = document.querySelectorAll('.textDisplay'); 
            removeText.forEach(text => {
                displayCont.removeChild(text); 
            })
        }

        else {
            let number = event.target.textContent; 
            let text = document.createElement('div'); 
            text.textContent = number; 
            text.classList.toggle("textDisplay"); 
            displayCont.appendChild(text); 
        }


    })
})