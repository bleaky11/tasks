import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Christmas, Halloween, Chinese New Year, Thanksgiving, New years eve
//Dates: 12/25, 10/31, 2/10(this year),11/28(this year), 12/31 
export type Holiday = "🎅" | "🎃" | "🐲" | "🦃" | "🎆";

export const nextByAlphabet: Record<Holiday, Holiday> = {
    "🐲": "🎅",
    "🎅": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "🐲"
};
export const nextByDate: Record<Holiday, Holiday> = {
    "🐲": "🎃",
    "🎃": "🦃",
    "🦃": "🎅",
    "🎅": "🎆",
    "🎆": "🐲",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>("🐲");

    function nextAlphabet(): void {
        const newHoliday = nextByAlphabet[currentHoliday];
        setHoliday(newHoliday);
    }
    function nextDate(): void {
        const newHoliday = nextByDate[currentHoliday];
        setHoliday(newHoliday);
    }

    return <div>
        <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
        <Button onClick={nextDate}>Advance by Time of Year</Button>
        <br></br>
        Holiday: {currentHoliday}
        </div>;
}
