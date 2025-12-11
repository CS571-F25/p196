import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Row, Col, Container } from "react-bootstrap";

export default function BakingTimer() {
    const [minutesInput, setMinutesInput] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running && totalSeconds > 0) {
            timer = setTimeout(() => setTotalSeconds(totalSeconds - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [running, totalSeconds]);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    const handleStart = () => {
        setTotalSeconds(minutesInput * 60);
        setRunning(true);
    };

    return (
        <Container style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Baking Timer</h1>
            <Form>
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <Form.Label htmlFor="minutesInput">Minutes</Form.Label>
                        <Form.Control
                            id="minutesInput"
                            type="number"
                            min="0"
                            value={minutesInput}
                            onChange={e => setMinutesInput(Number(e.target.value))}
                        />
                    </Col>
                </Row>
                <ButtonGroup className="mb-3" style={{ gap: "10px"}}>
                    <Button variant="success" style={{borderRadius: "7px"}} onClick={handleStart}>Start</Button>
                    <Button variant="warning" style={{borderRadius: "7px"}} onClick={() => setRunning(false)}>Pause</Button>
                    <Button style={{borderRadius: "7px"}} onClick={() => setRunning(true)}>Resume</Button>
                    <Button variant="danger" style={{borderRadius: "7px"}} onClick={() => { setRunning(false); setTotalSeconds(0); setMinutesInput(0) }}>Reset</Button>
                </ButtonGroup>
            </Form>
            <h2>{formattedTime} remaining</h2>
        </Container>
    );
}
