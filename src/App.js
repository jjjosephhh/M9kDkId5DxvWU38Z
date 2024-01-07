import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useMemo, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [stage, setStage] = useState(0);
  const [inputValueRedirectionsPerMonth, setInputValueRedirectionsPerMonth] =
    useState("");
  const [inputValueShorteningsPerSecond, setInputValueShorteningsPerSecond] =
    useState("");
  const redirectionsPerMonth = useMemo(() => {
    if (!inputValueRedirectionsPerMonth) return 0;
    return Number(inputValueRedirectionsPerMonth);
  }, [inputValueRedirectionsPerMonth]);
  const shorteningsPerSecond = useMemo(() => {
    if (!inputValueShorteningsPerSecond) return 0;
    return Number(inputValueShorteningsPerSecond);
  }, [inputValueShorteningsPerSecond]);
  const [errorRedirectionsPerMonth, setErrorRedirectionsPerMonth] =
    useState("");
  const [errorShorteningsPerSecond, setErrorShorteningsPerSecond] =
    useState("");

  const READ_RATIO_COUNT = useRef(
    Math.max(Math.floor(Math.random() * 6) * 100, 100)
  );
  const URL_SHORTENINGS_PER_MONTH = useRef(
    Math.max(Math.floor(Math.random() * 10) * 100000000, 100000000)
  );

  const stageSetter = (n) => () => setStage(n);
  const handleSubmitRedirectionsPerMonth = (event) => {
    event.preventDefault();
    const REDIRECTIONS_PER_MONTH =
      READ_RATIO_COUNT.current * URL_SHORTENINGS_PER_MONTH.current;
    const lowerLimit = 0.8 * REDIRECTIONS_PER_MONTH;
    const upperLimit = 1.2 * REDIRECTIONS_PER_MONTH;
    if (
      lowerLimit <= redirectionsPerMonth &&
      redirectionsPerMonth <= upperLimit
    ) {
      setStage(2);
      setErrorRedirectionsPerMonth("");
      return;
    }
    setStage(1);
    setErrorRedirectionsPerMonth(
      "Your answer is not within 20% of the correct answer"
    );
  };
  const handleSubmitUrlShorteningsPerSecond = (event) => {
    event.preventDefault();
    const SHORTENINGS_PER_SECOND =
      URL_SHORTENINGS_PER_MONTH.current / (30 * 24 * 3600);
    const lowerLimit = 0.8 * SHORTENINGS_PER_SECOND;
    const upperLimit = 1.2 * SHORTENINGS_PER_SECOND;
    if (
      lowerLimit <= shorteningsPerSecond &&
      shorteningsPerSecond <= upperLimit
    ) {
      setStage(3);
      setErrorShorteningsPerSecond("");
      console.log("correct");
      return;
    }
    setStage(2);
    setErrorShorteningsPerSecond(
      "Your answer is not within 20% of the correct answer"
    );
    console.log("incorrect");
  };
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
              <Card.Title>
                TinyURL Capacity Estimation and Constraints
              </Card.Title>
              <Card.Text>
                Our system will be read-heavy. There will be lots of redirection
                requests compared to new URL shortenings. Let’s assume a{" "}
                <b>{READ_RATIO_COUNT.current}:1 ratio </b> between read and
                write.
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
                <b>{URL_SHORTENINGS_PER_MONTH.current.toLocaleString()}</b> new
                URL shortenings per month, with{" "}
                <b>{READ_RATIO_COUNT.current}:1</b> read/write ratio, how many
                redirections should you expect during the same period?
              </Card.Text>
              <Form onSubmit={handleSubmitRedirectionsPerMonth}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueRedirectionsPerMonth}
                    onChange={(event) => {
                      setInputValueRedirectionsPerMonth(event.target.value);
                      setErrorRedirectionsPerMonth("");
                    }}
                    placeholder="How many redirections?"
                    aria-label="How many redirections?"
                    aria-describedby="how-many-redirections"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-redirections"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorRedirectionsPerMonth && (
                  <Form.Text muted>{errorRedirectionsPerMonth}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 2 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Queries Per Second (QPS)</Card.Title>
              <Card.Text>How many new URLs shortenings per second?</Card.Text>
              <Form onSubmit={handleSubmitUrlShorteningsPerSecond}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueShorteningsPerSecond}
                    onChange={(event) => {
                      setInputValueShorteningsPerSecond(event.target.value);
                      setErrorShorteningsPerSecond("");
                    }}
                    placeholder="How many shortenings per second?"
                    aria-label="How many shortenings per second?"
                    aria-describedby="how-many-shortenings-per-second"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-redirections"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorShorteningsPerSecond && (
                  <Form.Text muted>{errorShorteningsPerSecond}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default App;
