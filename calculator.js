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



//Flags
//I have very much lost the plot with these, and adjusted the 
//true/false values until they worked right. Denoted is their intended purpose
//Name them better next time.

let reset = true;       //flag signals readiness for number input
let opReset = true;     //flag signals end of operation stored for repeated "=" use
let fullReset = false;  //flag signals end of equasion for repeated "=" use

function buttonPress(thisButton){
    console.log(thisButton.textContent)

    //Add buttonpress to end of calcString
    if(calcString == "" && thisButton.textContent[0] == " "){
        calcString = inputDisplay.textContent}
    calcString = calcString + thisButton.textContent;
    if(thisButton.textContent != " =" ){
        opString = opString + thisButton.textContent;}

    //Protect against double-operators, replace with most recent operator
    if(calcString.search("  ") != -1){
        calcString = calcString.slice(0, calcString.length - 6) + calcString.slice(calcString.length - 3)
    }
    if(opString.search("  ") != -1){
        opString = opString.slice(0, opString.length - 6) + opString.slice(opString.length - 3)
    }

    //Protct against multiple decimal points
    if(opString.slice(0, opString.length - 1).match(/\./) 
    && opString[opString.length - 1] == "."){
        opString = opString.slice(0, opString.length - 1);
        calcString = calcString.slice(0, calcString.length - 1);
    }


    //Operations based on last button pressed
    switch(calcString[calcString.length - 1]){
        case " ":   //Whitespace used to denote operators
                    //Also used for .split() for processing in runCalc()
            if(fullReset){
                calcString = calcString.slice(0, calcString.length-4) + calcString.slice(calcString.length - 2)
            }
            inputDisplay.textContent = runCalc(calcString);
            fullDisplay.textContent =  calcString;
            if(opReset){
                opReset = false;
                opString = calcString.slice(calcString.length - 3);
            }
            reset = true;
            opReset = false;
            fullReset = false;
            break;
        case "E":   //"CE" or "Clear Entry" button, basically backspace
            switch(calcString[calcString.length - 3]){
                case " ":
                    calcString = calcString.slice(0, calcString.length - 5);
                    opString = opString.slice(0, opString.length - 5);
                    break;
                default: 
                    calcString = calcString.slice(0, calcString.length - 3)
                    opString = opString.slice(0, opString.length - 3)
            }
            break;
        case "C":   //"Clear" button
            calcString = "";
            opString = "";
            inputDisplay.textContent = "";
            fullDisplay.textContent = "";
            break;
        case "=":
            //if enter's already been pressed, repeat last operation
            if(Array.from(calcString).filter((c) => c == "=").length == 2){
                calcString = repeatOp(calcString, opString);
                // calcString = calcString.slice(0, calcString.length - 2)
            }
            
            inputDisplay.textContent = runCalc(calcString)
            fullDisplay.textContent = calcString + " " + inputDisplay.textContent
            fullReset = true;
            reset = true;
            break;
        default:    //digit inputs
            if(reset){inputDisplay.textContent = ""};
            // inputDisplay.textContent = inputDisplay.textContent + calcString[calcString.length - 1];
            inputDisplay.textContent = opString
            reset = false;
            opReset = true;
            if(fullReset){
                calcString = calcString[calcString.length - 1];
                opString = ""
                // opString = opString[opString.length - 1];
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