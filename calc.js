function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
   return a * b;
};

function divide(a, b) {
    return a / b;
};

let numberOne = "";
let operatorValue = "";
let numberTwo = "";

function operate(numberOne, operatorValue, numberTwo) {
   
     if (operatorValue === "+") {
       return add(numberOne, numberTwo);
    } else if (operatorValue === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operatorValue === "*" || operatorValue === "x") {
        return multiply(numberOne, numberTwo);
    } else if (operatorValue === "/" || operatorValue === "÷") {
        return divide(numberOne, numberTwo);
    }
};

let isSecondNumber = false;

const table = document.querySelector(".table");


const numbers = document.querySelectorAll(".element");
numbers.forEach(function(number) {
     number.addEventListener("click", function () {
        if (isSecondNumber === false) {
            numberOne += number.textContent;
            table.textContent = numberOne;
        } else if (isSecondNumber === true) {
            numberTwo += number.textContent;
            table.textContent = numberTwo;
        }
     })
});

document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9" || event.key === ".") {
        if (isSecondNumber === false) {
            numberOne += event.key;
            table.textContent = numberOne;
        } else { 
            numberTwo += event.key;
            table.textContent = numberTwo;
        }
    }
});     


const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function () {
        let result;

         if (numberTwo !== "") {
             numberOne = Number(numberOne);
             numberTwo = Number(numberTwo);
            result = operate(numberOne, operatorValue, numberTwo);
            table.textContent = result;
            numberOne = result;
            numberTwo = "";
            operatorValue = operator.textContent;
         }  else {
            operatorValue = operator.textContent;
         }  
         isSecondNumber = true;
    })
});

document.addEventListener("keydown", function (event) {
       if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
           if (numberTwo !== "") {
             numberOne = Number(numberOne);
             numberTwo = Number(numberTwo);
            result = operate(numberOne, operatorValue, numberTwo);
            table.textContent = result;
            numberOne = result;
            numberTwo = "";
            operatorValue = event.key;
         }  else {
            operatorValue = event.key;
         }  
         isSecondNumber = true;
       }
});




const equal = document.querySelector("#equals")
equal.addEventListener("click", function () {
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    
let result = operate(numberOne, operatorValue, numberTwo);

    table.textContent = result;
    numberOne = result;
    numberTwo = "";
    operatorValue = "";
    isSecondNumber = false;

});

document.addEventListener("keydown", function (event) {
    if (event.key === "=" || event.key === "Enter") {
        if (numberTwo !== "") {
             numberOne = Number(numberOne);
             numberTwo = Number(numberTwo);
            result = operate(numberOne, operatorValue, numberTwo);
            table.textContent = result;
            numberOne = result;
            numberTwo = "";
            operatorValue = operator.textContent;
         }  else {
            operatorValue = operator.textContent;
         }  
         isSecondNumber = true;
    }
})

const AC = document.querySelector("#AC");
AC.addEventListener("click", function () {
   numberOne = "";
   numberTwo = "";
   isSecondNumber = false;
   operatorValue = "";
   table.textContent = 0;
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        numberOne = "";
        numberTwo = "";
        isSecondNumber = false;
        operatorValue = "";
        table.textContent = 0;
    }
})

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", function () {
      if (isSecondNumber === false) {
        numberOne = numberOne.slice(0, -1);
        table.textContent = numberOne;
         
         if (numberOne === "") {
            table.textContent = 0;
         } else {
            table.textContent = numberOne;
         }
      } else {
        numberTwo = numberTwo.slice(0, -1); 
        table.textContent = numberTwo;

        if (numberTwo === "") {
            table.textContent = 0;
        } else {
            table.textContent = numberTwo;
        }
      } 
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        if (isSecondNumber === false) {
        numberOne = numberOne.slice(0, -1);
        table.textContent = numberOne;
         
         if (numberOne === "") {
            table.textContent = 0;
         } else {
            table.textContent = numberOne;
         }
      } else {
        numberTwo = numberTwo.slice(0, -1); 
        table.textContent = numberTwo;

        if (numberTwo === "") {
            table.textContent = 0;
        } else {
            table.textContent = numberTwo;
        }
      } 
    }
}) 








