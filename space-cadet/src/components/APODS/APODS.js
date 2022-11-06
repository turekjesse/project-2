import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Col, Button } from "react-bootstrap";
import Loading from "../Loading/Loading";
import Masonry from "react-masonry-css";

export default function APODS() {

  let currentDate = new Date().toISOString().split("T")[0];

  const [apods, setApods] = useState([]);
  const [startDate, setStartDate] = useState("2022-11-01");
  const [endDate, setEndDate] = useState(currentDate);

  const getAPODS = async (startDate, endDate) => {
    try {
      const key = process.env.REACT_APP_NASA_KEY;
      const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`;
      const response = await fetch(apiEndPoint);
      const data = await response.json();
      setApods(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAPODS(startDate, endDate);
    // eslint-disable-next-line
  }, []);

  while (apods.length === 0) {
    return <Loading />;
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <div style={{ margin: "20px auto", padding: "0 20px", maxWidth: "450px"}}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            getAPODS(startDate, endDate);
            console.log(e.target.value);
            // getAPODS(startDate, endDate)
          }}
        >
          <Form.Row>
            <Form.Label column lg={3} sm={4} xs={4}>
              Start&nbsp;Date:
            </Form.Label>
            <Col>
              <Form.Group
                style={{ padding: "0" }}                
                controlId="formStartDate"
              >
                <Form.Control
                  type="date"
                  placeholder="Start Date"
                  onChange={(e) => setStartDate(e.target.value)}
                  defaultValue={startDate}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={3} sm={4} xs={4}>
              End&nbsp;Date:
            </Form.Label>
            <Col>
              <Form.Group
                style={{ padding: "0" }}                
                controlId="formEndDate"
              >
                <Form.Control
                  type="date"
                  min={startDate}
                  placeholder="End Date"
                  onChange={(e) => setEndDate(e.target.value)}
                  defaultValue={endDate.toString()}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Button variant="light" type="submit" block>
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {apods
          .slice(0)
          .reverse()
          .map((apod, idx, key) => {
            const videoEmbed = (
              <div className="video-responsive">
                <iframe
                  src={apod.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                  title={apod.title}
                />
              </div>
            );
            let mediaDisplay;
            if (apod.media_type === "video") {
              mediaDisplay = videoEmbed;
            } else {
              mediaDisplay = (
                <img className="card-image" src={apod.url} alt={apod.title} />
              );
            }
            return (
              <div key={idx}>
                <Link to={`/apod/${apod.date}`} key={idx}>
                  <Card key={idx}>
                    {mediaDisplay}
                    <Card.Body className="apods" key={idx}>
                      <Card.Title>{apod.title}</Card.Title>
                      <Card.Text>{apod.date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
      </Masonry>
    </div>
  );
}
