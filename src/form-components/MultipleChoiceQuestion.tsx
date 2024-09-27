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
    
    function changeSelected(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Multiple choice">
                <Form.Label>What is your favorite letter?</Form.Label>
                <Form.Select value={selected} onChange={changeSelected}>
                    {options.map((o: string) => (
                        <option key = {o} value={o}>{o}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <br></br>Answer: {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
