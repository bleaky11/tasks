import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editmode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, toggleStudent] = useState<boolean>(true);

    function toggleEditMode(){
        setEditMode(!editmode);
    }
    function saveName(event : React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value === "student") {
            toggleStudent(true);
        } else {
            toggleStudent(false);
        }
    }

    return (
        <div>
            <h3>Edit Mode: {editmode? "on" : "off"}</h3>
            <Form.Check type = "switch" id="edit-mode" label="edit mode" checked={editmode} onChange={toggleEditMode}/>
            {editmode || <div>{name} is {isStudent? "a student" : "not a student"}</div>}
            <Form.Group controlId="name box">
                <Form.Label>Name Box</Form.Label>
                <Form.Control value={name} onChange={saveName} disabled = {!editmode}></Form.Control>
                <Form.Check type="radio" name = "Student" value={"student"} onChange={() => updateStudent} disabled = {!editmode}/>                    
                <Form.Check type="radio" name = "Not Student" value={"not student"} onChange={() => updateStudent} disabled={!editmode}/>
            </Form.Group>
        </div>
    );
}
