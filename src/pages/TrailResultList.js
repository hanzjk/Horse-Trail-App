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
        <>
          <Card style={{ width: "25rem" }} key={index} className="mt-5 ms-3">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">Trail Name</h1>
              </Card.Title>
              <h4 className="text-center">Park Name</h4>
              <Card.Text className="text-center" >Distance | Type</Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    })
  )
}

export default TrailResultList;
