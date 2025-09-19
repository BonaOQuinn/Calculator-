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

let result; 
function operator(op, num1, num2) {
    switch (op) {
        case "+":
            result = num1 + num2; 
            break; 
        case "-": 
            result = num1 - num2; 
            break; 
        case "*": 
            result = num1 * num2;
            break; 
        case "/": 
            result = num1 / num2; 
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


//variables for operator implementation
let num1 = null;
let op = null; 
let equal = false; 

let bpush = document.querySelectorAll(".button");
let displayCont = document.querySelector(".head-items"); 

bpush.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.id == "division") {
            let newImg = document.createElement('img'); 
            newImg.src = 'division.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
            op = "/"; 
        }

        else if (event.target.id == "multiplication") {
            let newImg = document.createElement('img'); 
            newImg.src = 'multiplication.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
            op = "*"; 
        }


        else if (event.target.id == "addition") {
            let newImg = document.createElement('img'); 
            newImg.src = 'addition-sign.png'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
            op = "+"; 
        }


        else if (event.target.id == "sub") {
            let newImg = document.createElement('img'); 
            newImg.src = 'minus.svg'; 
            newImg.classList.toggle("imgDisplay");
            displayCont.appendChild(newImg); 
            op = "-"; 
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

        else if (event.target.id == "equal") {
            equal = true; 
        }


        else {
            let number = event.target.textContent; 
            let text = document.createElement('div'); 
            text.textContent = number; 
            text.classList.toggle("textDisplay"); 
            displayCont.appendChild(text); 

            

        }

        /* 
            possible big fix: 

            -create num1 variable as global variable 
            -create bool equal
            -set num1 = nothing
            -initialize equal to false 
            -change equal to true when equal button is clicked 
            after else 
            update num1 with text display
            - if num1 != null: 
            set num2 = text displayed 
            -operator should already be chosen
        */



        num1 = text.textContent
        if (num1 != null) {
            let num2 = text.textContent; 
            while (equal == true) {
                operator(op, num1, num2); 
            }

        }

        let resultDisplay = document.createElement("div"); 
        resultDisplay.textContent = result; 
        resultDisplay.classList.toggle("textDisplay"); 
        displayCont.appendChild(resultDisplay);
        

 

    })
})