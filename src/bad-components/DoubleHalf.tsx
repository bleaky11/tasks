import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface dhValues {
    setDhValue: (value: number) => void;
    dhValue: number;
}

function Doubler({setDhValue, dhValue}: dhValues): React.JSX.Element {
    return (
        <Button onClick={() => {setDhValue(dhValue * 2)}}>
            Double
        </Button>
    );
}

function Halver({setDhValue, dhValue}: dhValues): React.JSX.Element {
    return (
        <Button onClick={() => {setDhValue(0.5 * dhValue)}}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
