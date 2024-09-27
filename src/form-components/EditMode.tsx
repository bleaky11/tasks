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
    function updateStudent() {
        toggleStudent(!isStudent)
    }

    return (
        <div>
            <h3>Edit Mode: {editmode? "on" : "off"}</h3>
            <Form.Check id="edit-mode" type="switch" label="edit mode" checked={editmode} onChange={toggleEditMode}/>
            {editmode || <div>{name} is {isStudent? "a student" : "not a student"}</div>}
            <Form.Label>Name Box</Form.Label>
            <Form.Control value={name} type="string" onChange={saveName} disabled = {!editmode}></Form.Control>
            <Form.Check type="checkbox" id ="box" onChange={updateStudent} disabled = {!editmode} label = "Student" checked = {isStudent}/>           
        </div>
    );
}
