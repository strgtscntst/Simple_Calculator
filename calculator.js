//assign vars to document.getelements

const fullDisplay = document.querySelector("#fullCalcDisplay");
const inputDisplay = document.querySelector("#IOContainer");

const BUTTONS = document.querySelectorAll("button");
let calcString = "";
let opString = "";

BUTTONS.forEach((node) => {
    node.onclick = (event) => {
        buttonPress(node)
        // console.log(node.textContent)
    }
});


console.log("Hi!")
console.log(BUTTONS)
let reset = true;
let opReset = true;
let fullReset = false;

function buttonPress(thisThing){
    console.log(thisThing.textContent)

    //Add buttonpress to end of calcString
    if(calcString == "" && thisThing.textContent[0] == " "){calcString = inputDisplay.textContent}

    calcString = calcString + thisThing.textContent;
    if(thisThing.textContent != " ="){opString = opString + thisThing.textContent;}

    //Protect against double-operators, replace with most recent operator
    if(calcString.search("  ") != -1){
        calcString = calcString.slice(0, calcString.length - 6) + calcString.slice(calcString.length - 3)
    }

    //Operations based on last button pressed
    switch(calcString[calcString.length - 1]){
        case " ":
            inputDisplay.textContent = runCalc(calcString);
            fullDisplay.textContent =  calcString;
            reset = true;
            if(opReset){
                opReset = false;
                opString = calcString.slice(calcString.length - 3);
            }
            opReset = false;
            break;
        case "E":
            switch(calcString[calcString.length - 3]){
                case " ":
                    calcString = calcString.slice(0, calcString.length - 5);
                    break;
                default: calcString = calcString.slice(0, calcString.length - 3)
            }
            break;
        case "C":
            calcString = "";
            inputDisplay.textContent = ""
            fullDisplay.textContent = ""
            break;
        case "=":
            //if enter's already been pressed, repeat last operation
            if(Array.from(calcString).filter((c) => c == "=").length == 2){
                calcString = repeatOp(calcString, opString)
            }
            
            inputDisplay.textContent = runCalc(calcString)
            fullDisplay.textContent = calcString + " " + inputDisplay.textContent
            fullReset = true;
            reset = true;
            break;
        default:
            if(reset){inputDisplay.textContent = ""}
            inputDisplay.textContent = inputDisplay.textContent + calcString[calcString.length - 1]
            reset = false;
            opReset = true;
            if(fullReset){
                calcString = calcString[calcString.length - 1];
                
            }
            fullReset = false;
        }
        console.log("calcString: " + calcString)
        console.log("opString: " + opString)
            
            
        }
        
        //For each buttonpress
        //Add buttonpress to the end of the calcString
        //If there's two spaces in a row (doubled operators), remove the last 3 chars from the string
        
        //If last char is " ", run equasion & update fullDisplay
        //Else Add buttonpress to the end of inputDisplay
        //If last char is C, backspace
        //If last char is E, set calString to ""
        //If last char is "=", run equasion, update calcString output, and THEN set calcString to ""
        
        
        function runCalc(){
            console.log("Calc Ran")
            return "total"
        }
        
        function repeatOp(originalString, lastOperation){
            console.log("repeated last operation")
            
            return originalString.slice(0, originalString.length - 4) + lastOperation + " ="
        }