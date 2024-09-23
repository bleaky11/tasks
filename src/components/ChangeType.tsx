import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");

    function swapQuestionType(): void {
        (questionType === "short_answer_question")? setQuestionType("multiple_choice_question") : setQuestionType("short_answer_question");
    }

    return <div>
        <Button onClick={swapQuestionType}>Change Type</Button>
        <br></br>
        Question type is: 
        {questionType === "short_answer_question"? <span> Short Answer Question</span> : 
        <span> Multiple Choice Question</span>}
        </div>;
}
