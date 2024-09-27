import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId = "Check answer">
                <Form.Label>Answer to unknown question:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={changeAnswer}/>
            </Form.Group>
            <div>
                Answer is: {answer === expectedAnswer? "✔️" : "❌"}
            </div>
        </div>
    );
}
