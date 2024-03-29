import React from 'react'
import Nav from "../NabBar/Nav"
import information from "./information"
import Footer from "../Footer/Footer"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Link } from "react-router-dom";

const Games = () => {

    return (
      <>
        <Nav />
  
        {/* heading */}
        <div className="container" >
          <h2 style={{color:"orange", marginTop:80}}>Games</h2>
        </div>
  
        {/* Games info show  */}
        <div>
        <CardGroup className='mx-auto' style={{marginTop: -30, padding:40, width:"70%"}}>
          {
            information.map((information, i) =><Card key = {i} style={{ padding:10, marginRight: 30}}>
              <Card.Img variant="top" src={information.Picture} />

              <Card.Footer style={{marginTop:20}}>
                <Link to={information.navName}>{information.Name}</Link>
              </Card.Footer>
            </Card>
              
              )
          }
        
       </CardGroup>
        </div>



          {/* footer  */}
        <div style={{marginTop:125}}>
          <Footer />
        </div>


      </>
    );
  }

export default Games;