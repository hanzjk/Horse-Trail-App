import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function TrailResultList() {
  const [trails, setTrails] = useState([]);
  const getTrails = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTrails(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTrails();
  }, []);

  return (
    trails.map((trail, index) => {
      console.log(trail);
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      );
    })
  )
}

export default TrailResultList;
