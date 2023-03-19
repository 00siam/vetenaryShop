import React from "react";
import Nav from "../NabBar/Nav";
import information from "./information";
import Footer from "../Footer/Footer"

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Doctorinformation = ({foo = false, header = false}) => {
  return (
    <>
      <Nav />

      {/* heading */}
      {
        header ? " ":  <div className="container">
        <h2 style={{ color: "orange", marginTop: 80 }}>Doctor Infomation</h2>
      </div>
     }

      {/* Doctors info show  */}
      <div style={{backgroundColor: "#B5B5B5"}}>
        <CardGroup
          className="mx-auto"
          style={{ padding: 40, width: "80%" }}
        >
          {information.map((information, i) => (
            <Card key={i} style={{ padding: 30, marginRight: 30 }}>
              <Card.Img variant="top" src={information.Picture} />
              <Card.Body>
                <Card.Title style={{ color: "orange" }}>
                  {" "}
                  <b>{information.Name}</b>
                </Card.Title>
                <Card.Text className="text-justify">
                  {information.Degree}
                </Card.Text>
                <Card.Text className="text-justify">
                  {information.Consult}
                </Card.Text>
                <Card.Text className="text-justify">
                  {information.Phone}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{information.Experience}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>

      {
        foo ? " " : <div> <Footer/> </div>
      }
    </>
  );
};

export default Doctorinformation;
