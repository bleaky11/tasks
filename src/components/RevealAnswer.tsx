import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setReveal] = useState<boolean>(false);

    // A function to be called when clicking the button
    function flipVisibility(): void{
        setReveal(!revealed);
    }

    return (<div>
            <Button onClick = {flipVisibility}>Reveal Answer</Button>
            <br></br>
            your answer is
            {revealed && <div>42</div>}
        </div>);
}
