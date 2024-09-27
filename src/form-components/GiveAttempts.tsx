import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface attempts {
    numAttempts: number;
    setNumAttempts: (num: number) => void;
    numRequested: number;
}

function UseAttempt({ setNumAttempts, numAttempts }: attempts): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setNumAttempts(numAttempts-1);
            }} disabled = {numAttempts <= 0}
        >
            use
        </Button>
    );
}
function GainAttempts({ numAttempts, setNumAttempts, numRequested }: attempts): React.JSX.Element {
    return (
        <Button onClick={() => {setNumAttempts(numAttempts+numRequested);}}>gain</Button>
    );
}



export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numRequested, setNumRequested] = useState<number>(0)
    function setRequest(event: React.ChangeEvent<HTMLInputElement>){
        setNumRequested(parseInt(event.target.value));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Number of Attempts left: {numAttempts} <br></br>
            Number of attempts you want to add <Form.Group controlId="attempt gain">
                <Form.Control value={numRequested} onChange={setRequest} type="number"></Form.Control>
            </Form.Group>
            <UseAttempt setNumAttempts={setNumAttempts} numAttempts={numAttempts} numRequested={numRequested}></UseAttempt>
            <GainAttempts numRequested={numRequested} setNumAttempts={setNumAttempts} numAttempts={numAttempts}></GainAttempts>

        </div>
    );
}
