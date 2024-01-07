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
  const endRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const [stage, setStage] = useState(0);
  const [inputValueRedirectionsPerMonth, setInputValueRedirectionsPerMonth] =
    useState("");
  const [inputValueShorteningsPerSecond, setInputValueShorteningsPerSecond] =
    useState("");
  const [inputValueRedirectionsPerSecond, setInputValueRedirectionsPerSecond] =
    useState("");
  const [inputValueTotalObjectCount, setInputValueTotalObjectCount] =
    useState("");
  const [inputValueTotalStorage, setInputValueTotalStorage] = useState("");
  const [inputValueIncomingData, setInputValueIncomingData] = useState("");
  const [inputValueOutgoingData, setInputValueOutgoingData] = useState("");
  const [inputValueTotalRequestsPerDay, setInputValueTotalRequestsPerDay] =
    useState("");
  const [
    inputValueMemoryForCachedRequestsPerDay,
    setInputValueMemoryForCachedRequestsPerDay,
  ] = useState("");

  const redirectionsPerMonth = useMemo(() => {
    if (!inputValueRedirectionsPerMonth) return 0;
    return Number(inputValueRedirectionsPerMonth);
  }, [inputValueRedirectionsPerMonth]);
  const shorteningsPerSecond = useMemo(() => {
    if (!inputValueShorteningsPerSecond) return 0;
    return Number(inputValueShorteningsPerSecond);
  }, [inputValueShorteningsPerSecond]);
  const redirectionsPerSecond = useMemo(() => {
    if (!inputValueRedirectionsPerSecond) return 0;
    return Number(inputValueRedirectionsPerSecond);
  }, [inputValueRedirectionsPerSecond]);
  const totalObjectCount = useMemo(() => {
    if (!inputValueTotalObjectCount) return 0;
    return Number(inputValueTotalObjectCount);
  }, [inputValueTotalObjectCount]);
  const totalStorage = useMemo(() => {
    if (!inputValueTotalStorage) return 0;
    return Number(inputValueTotalStorage);
  }, [inputValueTotalStorage]);
  const incomingData = useMemo(() => {
    if (!inputValueIncomingData) return 0;
    return Number(inputValueIncomingData);
  }, [inputValueIncomingData]);
  const outgoingData = useMemo(() => {
    if (!inputValueOutgoingData) return 0;
    return Number(inputValueOutgoingData);
  }, [inputValueOutgoingData]);
  const totalRequestsPerDay = useMemo(() => {
    if (!inputValueTotalRequestsPerDay) return 0;
    return Number(inputValueTotalRequestsPerDay);
  }, [inputValueTotalRequestsPerDay]);
  const memoryForCachedRequestsPerDay = useMemo(() => {
    if (!inputValueMemoryForCachedRequestsPerDay) return 0;
    return Number(inputValueMemoryForCachedRequestsPerDay);
  }, [inputValueMemoryForCachedRequestsPerDay]);

  const [errorRedirectionsPerMonth, setErrorRedirectionsPerMonth] =
    useState("");
  const [errorShorteningsPerSecond, setErrorShorteningsPerSecond] =
    useState("");
  const [errorRedirectionsPerSecond, setErrorRedirectionsPerSecond] =
    useState("");
  const [errorTotalObjectCount, setErrorTotalObjectCount] = useState("");
  const [errorTotalStorage, setErrorTotalStorage] = useState("");
  const [errorIncomingData, setErrorIncomingData] = useState("");
  const [errorOutgoingData, setErrorOutgoingData] = useState("");
  const [errorTotalRequestsPerDay, setErrorTotalRequestsPerDay] = useState("");
  const [
    errorMemoryForCachedRequestsPerDay,
    setErrorMemoryForCachedRequestsPerDay,
  ] = useState("");

  const READ_RATIO_COUNT = useRef(
    Math.max(Math.floor(Math.random() * 6) * 100, 100)
  );
  const URL_SHORTENINGS_PER_MONTH = useRef(
    Math.max(Math.floor(Math.random() * 10) * 100000000, 100000000)
  );
  const STORAGE_PERIOD_IN_YEARS = useRef(
    Math.max(Math.floor(Math.random() * 11), 5)
  );
  const OBJECT_SIZE = useRef(100 * Math.max(Math.floor(Math.random() * 10), 5));

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
      scrollToBottom();
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
      scrollToBottom();
      return;
    }
    setStage(2);
    setErrorShorteningsPerSecond(
      "Your answer is not within 20% of the correct answer"
    );
  };
  const handleSubmitRedirectionsPerSecond = (event) => {
    event.preventDefault();
    const SHORTENINGS_PER_SECOND =
      URL_SHORTENINGS_PER_MONTH.current / (30 * 24 * 3600);
    const REDIRECTIONS_PER_SECOND =
      SHORTENINGS_PER_SECOND * READ_RATIO_COUNT.current;
    const lowerLimit = 0.8 * REDIRECTIONS_PER_SECOND;
    const upperLimit = 1.2 * REDIRECTIONS_PER_SECOND;
    if (
      lowerLimit <= redirectionsPerSecond &&
      redirectionsPerSecond <= upperLimit
    ) {
      setStage(4);
      setErrorRedirectionsPerSecond("");
      scrollToBottom();
      return;
    }
    setStage(3);
    setErrorRedirectionsPerSecond(
      "Your answer is not within 20% of the correct answer"
    );
  };
  const handleSubmitTotalObjectCount = (event) => {
    event.preventDefault();
    const TOTAL_OBJECT_COUNT =
      URL_SHORTENINGS_PER_MONTH.current * STORAGE_PERIOD_IN_YEARS.current * 12;
    const lowerLimit = 0.8 * TOTAL_OBJECT_COUNT;
    const upperLimit = 1.2 * TOTAL_OBJECT_COUNT;
    if (lowerLimit <= totalObjectCount && totalObjectCount <= upperLimit) {
      setStage(5);
      setErrorTotalObjectCount("");
      scrollToBottom();
      return;
    }
    setStage(4);
    setErrorTotalObjectCount(
      "Your answer is not within 20% of the correct answer"
    );
  };
  const handleSubmitTotalStorage = (event) => {
    event.preventDefault();
    const TOTAL_OBJECT_COUNT =
      URL_SHORTENINGS_PER_MONTH.current * STORAGE_PERIOD_IN_YEARS.current * 12;
    const TOTAL_STORAGE = TOTAL_OBJECT_COUNT * OBJECT_SIZE.current * 1e-12;
    const lowerLimit = 0.8 * TOTAL_STORAGE;
    const upperLimit = 1.2 * TOTAL_STORAGE;
    if (lowerLimit <= totalStorage && totalStorage <= upperLimit) {
      setStage(6);
      setErrorTotalStorage("");
      scrollToBottom();
      return;
    }
    setStage(5);
    setErrorTotalStorage("Your answer is not within 20% of the correct answer");
  };
  const handleSubmitIncomingData = (event) => {
    event.preventDefault();
    const INCOMING_DATA = shorteningsPerSecond * OBJECT_SIZE.current * 1e-3;
    const lowerLimit = 0.8 * INCOMING_DATA;
    const upperLimit = 1.2 * INCOMING_DATA;
    if (lowerLimit <= incomingData && incomingData <= upperLimit) {
      setStage(7);
      setErrorIncomingData("");
      scrollToBottom();
      return;
    }
    setStage(6);
    setErrorIncomingData("Your answer is not within 20% of the correct answer");
  };
  const handleSubmitOutgoingData = (event) => {
    event.preventDefault();
    const OUTGOING_DATA = redirectionsPerSecond * OBJECT_SIZE.current * 1e-6;
    const lowerLimit = 0.8 * OUTGOING_DATA;
    const upperLimit = 1.2 * OUTGOING_DATA;
    if (lowerLimit <= outgoingData && outgoingData <= upperLimit) {
      setStage(8);
      setErrorOutgoingData("");
      scrollToBottom();
      return;
    }
    setStage(7);
    setErrorOutgoingData("Your answer is not within 20% of the correct answer");
  };
  const handleSubmitTotalRequestsPerDay = (event) => {
    event.preventDefault();
    const TOTAL_REQUESTS_PER_DAY = redirectionsPerSecond * 3600 * 24;
    const lowerLimit = 0.8 * TOTAL_REQUESTS_PER_DAY;
    const upperLimit = 1.2 * TOTAL_REQUESTS_PER_DAY;
    if (
      lowerLimit <= totalRequestsPerDay &&
      totalRequestsPerDay <= upperLimit
    ) {
      setStage(9);
      setErrorTotalRequestsPerDay("");
      scrollToBottom();
      return;
    }
    setStage(8);
    setErrorTotalRequestsPerDay(
      "Your answer is not within 20% of the correct answer"
    );
  };
  const handleSubmitCachedRequestsPerDay = (event) => {
    event.preventDefault();
    const CACHED_REQUESTS =
      0.2 * totalRequestsPerDay * OBJECT_SIZE.current * 1e-9;
    const lowerLimit = 0.8 * CACHED_REQUESTS;
    const upperLimit = 1.2 * CACHED_REQUESTS;
    if (
      lowerLimit <= memoryForCachedRequestsPerDay &&
      memoryForCachedRequestsPerDay <= upperLimit
    ) {
      setStage(10);
      setErrorMemoryForCachedRequestsPerDay("");
      scrollToBottom();
      return;
    }
    setStage(9);
    setErrorMemoryForCachedRequestsPerDay(
      "Your answer is not within 20% of the correct answer"
    );
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
              <Button
                variant="primary"
                onClick={() => {
                  setStage((x) => (x ? 0 : 1));

                  setInputValueRedirectionsPerMonth("");
                  setInputValueShorteningsPerSecond("");
                  setInputValueRedirectionsPerSecond("");
                  setInputValueTotalObjectCount("");
                  setInputValueTotalStorage("");
                  setInputValueIncomingData("");
                  setInputValueOutgoingData("");
                  setInputValueTotalRequestsPerDay("");
                  setInputValueMemoryForCachedRequestsPerDay("");

                  setErrorRedirectionsPerMonth("");
                  setErrorShorteningsPerSecond("");
                  setErrorRedirectionsPerSecond("");
                  setErrorTotalObjectCount("");
                  setErrorTotalStorage("");
                  setErrorIncomingData("");
                  setErrorOutgoingData("");
                  setErrorTotalRequestsPerDay("");
                  setErrorMemoryForCachedRequestsPerDay("");
                }}
              >
                {stage === 0 ? "Start" : "Restart"}
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
                    placeholder="How many redirections per month?"
                    aria-label="How many redirections per month?"
                    aria-describedby="how-many-redirections-per-month"
                  />
                  <InputGroup.Text id="basic-addon2-redirections-per-month">
                    Redirections Per Month
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-redirections-per-month"
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
              <Card.Text>How many new URL shortenings per second?</Card.Text>
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
                  <InputGroup.Text id="basic-addon2-shortenings-per-second">
                    Shortenings Per Second
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-shortenings-per-second"
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
        {stage >= 3 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>URLs redirections per second will be:</Card.Title>
              <Form onSubmit={handleSubmitRedirectionsPerSecond}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueRedirectionsPerSecond}
                    onChange={(event) => {
                      setInputValueRedirectionsPerSecond(event.target.value);
                      setErrorRedirectionsPerSecond("");
                    }}
                    placeholder="How many redirections per second?"
                    aria-label="How many redirections per second?"
                    aria-describedby="how-many-redirections-per-second"
                  />
                  <InputGroup.Text id="basic-addon2-redirections-per-second">
                    Redirections Per Second
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-redirections-per-second"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorRedirectionsPerSecond && (
                  <Form.Text muted>{errorRedirectionsPerSecond}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 4 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Storage estimates</Card.Title>
              <Card.Text>
                Let’s assume we store every URL shortening request (and
                associated shortened link) for {STORAGE_PERIOD_IN_YEARS.current}{" "}
                years. Since we expect to have{" "}
                <b>{URL_SHORTENINGS_PER_MONTH.current.toLocaleString()}</b> new
                URLs every month, the total number of objects we expect to store
                will be:
              </Card.Text>
              <Form onSubmit={handleSubmitTotalObjectCount}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueTotalObjectCount}
                    onChange={(event) => {
                      setInputValueTotalObjectCount(event.target.value);
                      setErrorTotalObjectCount("");
                    }}
                    placeholder="How many total objects?"
                    aria-label="How many total objects?"
                    aria-describedby="how-many-total-objects"
                  />
                  <InputGroup.Text id="basic-addon2-total-objects">
                    Total Objects
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-many-total-objects"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorTotalObjectCount && (
                  <Form.Text muted>{errorTotalObjectCount}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 5 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Total Storage</Card.Title>
              <Card.Text>
                Let’s assume that each stored object will be approximately{" "}
                <b>{OBJECT_SIZE.current}</b> bytes. How much total storage will
                you need (in TB)?
              </Card.Text>
              <Form onSubmit={handleSubmitTotalStorage}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueTotalStorage}
                    onChange={(event) => {
                      setInputValueTotalStorage(event.target.value);
                      setErrorTotalStorage("");
                    }}
                    placeholder="How much total storage (TB)?"
                    aria-label="How much total storage?"
                    aria-describedby="how-much-total-storage"
                  />
                  <InputGroup.Text id="basic-addon2-total-storage">
                    Total Storage (TB)
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-much-total-storage"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorTotalStorage && (
                  <Form.Text muted>{errorTotalStorage}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 6 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Bandwidth estimates (write)</Card.Title>
              <Card.Text>
                For write requests, since we expect{" "}
                <b>{shorteningsPerSecond}</b> new URLs every second, what is the
                expected total incoming data for our service (in KB per second):
              </Card.Text>
              <Form onSubmit={handleSubmitIncomingData}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueIncomingData}
                    onChange={(event) => {
                      setInputValueIncomingData(event.target.value);
                      setErrorIncomingData("");
                    }}
                    placeholder="How much incoming data should we expect (KB/s)?"
                    aria-label="How much incoming data should we expect?"
                    aria-describedby="how-much-incoming-data"
                  />
                  <InputGroup.Text id="basic-addon2-incoming-data">
                    Incoming Data (KB/s)
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-much-incoming-data"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorIncomingData && (
                  <Form.Text muted>{errorIncomingData}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 7 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Bandwidth estimates (read)</Card.Title>
              <Card.Text>
                For read requests, since every second we expect{" "}
                <b>{redirectionsPerSecond.toLocaleString()}</b> URL
                redirections, what would be our total outgoing data for our
                service in MB/s?
              </Card.Text>
              <Form onSubmit={handleSubmitOutgoingData}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueOutgoingData}
                    onChange={(event) => {
                      setInputValueOutgoingData(event.target.value);
                      setErrorOutgoingData("");
                    }}
                    placeholder="How much outgoing data should we expect (KB/s)?"
                    aria-label="How much outgoing data should we expect?"
                    aria-describedby="how-much-outgoing-data"
                  />
                  <InputGroup.Text id="basic-addon2-outgoing-data">
                    Outgoing Data (MB/s)
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-much-outgoing-data"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorOutgoingData && (
                  <Form.Text muted>{errorOutgoingData}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 8 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Memory estimates (cache)</Card.Title>
              <Card.Text>
                How many total requests will we get per day?
              </Card.Text>
              <Form onSubmit={handleSubmitTotalRequestsPerDay}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueTotalRequestsPerDay}
                    onChange={(event) => {
                      setInputValueTotalRequestsPerDay(event.target.value);
                      setErrorTotalRequestsPerDay("");
                    }}
                    placeholder="How many total requests will we get per day?"
                    aria-label="How many total requests will we get per day?"
                    aria-describedby="how-total-requests-per-day"
                  />
                  <InputGroup.Text id="basic-addon2-how-total-requests-per-day">
                    Total Requests Per Day
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-total-requests-per-day"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorTotalRequestsPerDay && (
                  <Form.Text muted>{errorTotalRequestsPerDay}</Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 9 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Memory estimates (cache)</Card.Title>
              <Card.Text>
                If we want to cache some of the hot URLs that are frequently
                accessed, how much memory will we need to store them? If we
                follow the 80-20 rule, meaning 20% of URLs generate 80% of
                traffic, we would like to cache these 20% hot URLs. How much
                memory do we need (in GB) to cache 20% of daily requests?
              </Card.Text>
              <Form onSubmit={handleSubmitCachedRequestsPerDay}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    value={inputValueMemoryForCachedRequestsPerDay}
                    onChange={(event) => {
                      setInputValueMemoryForCachedRequestsPerDay(
                        event.target.value
                      );
                      setErrorMemoryForCachedRequestsPerDay("");
                    }}
                    placeholder="How memory do we need for the cache (in GB)?"
                    aria-label="How memory do we need for the cache (in GB)?"
                    aria-describedby="how-memory-for-cache"
                  />
                  <InputGroup.Text id="basic-addon2-how-memory-for-cache">
                    GB
                  </InputGroup.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    id="how-memory-for-cache"
                  >
                    Submit
                  </Button>
                </InputGroup>
                {errorMemoryForCachedRequestsPerDay && (
                  <Form.Text muted>
                    {errorMemoryForCachedRequestsPerDay}
                  </Form.Text>
                )}
              </Form>
            </Card.Body>
          </Card>
        )}
        {stage >= 10 && (
          <Card className="w-100 mt-2">
            <Card.Body>
              <Card.Title>Good Job!</Card.Title>
              <Card.Text>
                One thing to note here is that since there will be many
                duplicate requests (of the same URL), our actual memory usage
                will be less than {memoryForCachedRequestsPerDay}GB.
              </Card.Text>
            </Card.Body>
          </Card>
        )}
        <div style={{ width: "100%", height: "50px" }} ref={endRef} />
      </Container>
    </>
  );
}

export default App;
