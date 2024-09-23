import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attemptsLeft, setAttempts] = useState<number>(4);

    return <div>
        <Button onClick={() => {setInProgress(true); setAttempts(attemptsLeft-1)}} disabled = {attemptsLeft <= 0 || inProgress}>Start Quiz</Button>
        <Button onClick={() => {setInProgress(false)}} disabled = {!inProgress}>Stop Quiz</Button>
        <br></br>
        <Button onClick={() => {setAttempts(attemptsLeft+1)}} disabled = {inProgress}>Mulligan</Button>
        Attempts left: {attemptsLeft}
        </div>;
}
