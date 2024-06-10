--TODO LIST--
________________________________________________________________________________

Calculator appearance:
    -buttons for each number and operation
        - 0 - 9, . 
        - + - * / = C CE
    -add color
        -different color for operators
    -provide two variations of output
        -full inputs in gray and smaller, above
        -currently typed number/output darker, larger, below
            -should be Input box for keyboard iput
________________________________________________________________________________

Calculator Function:
    -basic operations
        -add
        -subtact
        -multiply
        -divide
    -clear entry (CE)
    -clear full (C)
    -"=" triggers the calculation and adds the input text to the top row
    -buttons populate display when pressed
    -make operate() function?
________________________________________________________________________________

Potential Bugs:
    -don't perform more than one operator at a time
    -round answers with long decimals to avoid overflowing the output
    -pressing "=" key before entering all numbers or operator might cause problems
    -pressing "clear" should wipe all existing data.
    -avoid divide-by-zero errors
________________________________________________________________________________

Extra Credit:
    -add the decimal point
    -make it look nice using CSS
    -add a backspace (CE) button
    -add keyboard support

________________________________________________________________________________
________________________________________________________________________________

::  Notes   ::
________________________________________________________________________________
________________________________________________________________________________

Assignment seems to expect me to have the buttons concat to a string that is the function, then parse it to run when the Equals button is pressed.
    -thought: if I do this, have the operators apply a space (i.e.: " ADD ") to either side of the text. This can be used to convert the string to an array, split along " ".

My first instinct is, instead, to assign button press values to A and B and operate on them there.