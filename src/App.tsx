import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import card from "./creditcard.gif"
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <span style={{ color: "blue" }}>
                    UD CISC275 with React Hooks and TypeScript
                </span>
            </header>
<<<<<<< HEAD
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Free nitro (Log Hello World){" "}
            </Button>
            <img src={card} alt="gimme your credit card" />
            <p>
                <h1> Hi there </h1>
                Levi was here
                <br></br>
                Hello World
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            >
                                {" "}
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    video that taught me hyperlinks
                                </a>{" "}
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            >
                                <span style={{ color: "orange" }}>
                                    column 2
                                </span>
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            >
                                <span style={{ color: "orange" }}>
                                    column 3
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                    List:
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ol>
                </div>
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
