import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    
    function changeSelected(event: React.ChangeEvent<HTMLInputElement>){
        setSelected(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            {options.map((option : string) => <Form.Check inline key={option} type ="radio" name = {option} 
            onChange={changeSelected} checked={selected === option} label = {option} value={option}></Form.Check>)}
            <br></br>Answer: {selected === expectedAnswer? "✔️" : "❌"}
        </div>
    );
}
