import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const colors = ["red", "blue", "green", "purple", "orange", "cyan", "magenta", "black", "white"]

export function ChangeColor(): React.JSX.Element {
    const [curColor, setColor] = useState<string>("red");

    function changeColor(event : React.ChangeEvent<HTMLInputElement>){
        setColor(event.target.value)
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => <Form.Check inline key = {color} type = "radio"
                label={color} checked={curColor === color} value={color} name={color} onChange={changeColor}></Form.Check>)}
            <br></br>
            You have chosen <div
            data-testid="colored-box"
            style={{
                backgroundColor: curColor,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        >{curColor}</div>
        </div>
    );
}
