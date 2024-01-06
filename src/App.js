import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [stage, setStage] = useState(0);
  const stageSetter = (n) => () => setStage(n);
  const READ_RATIO_COUNT = Math.max(Math.floor(Math.random() * 6) * 100, 100);
  const URL_SHORTENINGS_PER_MONTH = Math.max(
    Math.floor(Math.random() * 10) * 1000000,
    1000000
  );
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            System Design Capacity Estimation Worksheet
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {stage >= 0 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Capacity Estimation and Constraints</Card.Title>
              <Card.Text>
                Our system will be read-heavy. There will be lots of redirection
                requests compared to new URL shortenings. Let’s assume a{" "}
                <b>{READ_RATIO_COUNT}:1 ratio </b> between read and write.
              </Card.Text>
              <Button variant="primary" onClick={stageSetter(1)}>
                OK
              </Button>
            </Card.Body>
          </Card>
        )}
        {stage >= 1 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Traffic estimates</Card.Title>
              <Card.Text>
                Assuming, we will have{" "}
                {URL_SHORTENINGS_PER_MONTH.toLocaleString()} new URL shortenings
                per month, with {READ_RATIO_COUNT}:1 read/write ratio, how many
                redirections should you expect during the same period?
              </Card.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  Submit
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        )}
        {stage >= 2 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>XXX</Card.Text>
              <Button variant="primary" onClick={stageSetter(3)}>
                OK
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default App;
