import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const num = 4 //I was trying to use d6() to set these as random numbers to begin with
    let num2 = 3 //But that breaks the test
    //if(num2 === num){num2 = (num2+1 % 6)} won't need this anymore
    const [dice1, setDice1] = useState<number>(num)
    const [dice2, setDice2] = useState<number>(num2)

    return (
        <div>
            Two Dice
            <br></br>
            <Button onClick={() => {setDice1(d6())}}>Roll Left</Button>
            <Button onClick={() => {setDice2(d6())}}>Roll Right</Button>
            <br></br>
            Left dice: <span data-testid = "left-die"> {dice1} </span>
            Right dice: <span data-testid = "right-die"> {dice2} </span>
            <br></br>
            {(dice1 === dice2 && dice1 !== 1)? <span>you win!</span> : ((dice1 === 1 && dice2 === 1)? <span>you lose...</span> : <span></span>)}
            <br></br>
            {(dice1 === 1 && dice2 === 1) && "Snake eyes!"}
        </div>
    );
}
