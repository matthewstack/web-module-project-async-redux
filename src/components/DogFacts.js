import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFacts } from "./../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Card, Button } from "react-bootstrap";

const DogFacts = ({ dogFacts, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(getFacts());
  }, []);

  if (error) {
    return (
      <h2>
        <Alert variant="danger">
          There's an error
          {error}
        </Alert>
      </h2>
    );
  }

  if (isFetching) {
    return (
      <h2>
        <Alert variant="success">Grabbing you a fresh dog fact!</Alert>
      </h2>
    );
  }

  const handleClick = () => {
    dispatch(getFacts());
  };

  return (
    <div>
      <Card>
        <Card.Header>FEATURED DOG FACT</Card.Header>
        <Card.Body>
          <Card.Text>{dogFacts[0].fact}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            I want a different dog fact
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dogFacts: state.dogFacts,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(DogFacts);
