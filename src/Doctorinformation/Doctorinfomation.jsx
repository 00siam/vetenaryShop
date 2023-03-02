import React from 'react'
import Nav from "../NabBar/Nav"
import information from "./information"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Doctorinformation = () => {

    return (
      <>
        <Nav />
  
        {/* heading */}
        <div className="container" >
          <h2 style={{color:"orange", marginTop:80}}>Doctor Information</h2>
        </div>
  
        {/* Doctors info show  */}
        <div>
        <CardGroup className='mx-auto' style={{marginTop: -30, padding:40, width:"50rem"}}>
          {
            information.map((information, i) =><Card key = {i} style={{ padding:30, marginRight: 30}}>
              <Card.Img variant="top" src={information.Picture} />
              <Card.Body>
                <Card.Title style={{color:"orange"}}> <b>{information.Name}</b></Card.Title>
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
              
              )
          }
        
       </CardGroup>
        </div>



      </>
    );
  }

export default Doctorinformation;