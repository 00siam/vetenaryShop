import React from 'react'
import Nav from "../NabBar/Nav"
import information from "./information"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Games = () => {

    return (
      <>
        <Nav />
  
        {/* heading */}
        <div className="container" >
          <h2 style={{color:"orange", marginTop:80}}>Games</h2>
        </div>
  
        {/* Doctors info show  */}
        <div>
        <CardGroup className='mx-auto' style={{marginTop: -30, padding:40, width:"70%"}}>
          {
            information.map((information, i) =><Card key = {i} style={{ padding:10, marginRight: 30}}>
              <Card.Img variant="top" src={information.Picture} />

              <Card.Footer style={{marginTop:20}}>
                <small className="text-muted" >{information.Name}</small>
              </Card.Footer>
            </Card>
              
              )
          }
        
       </CardGroup>
        </div>



      </>
    );
  }

export default Games;