import Nav from "../NabBar/Nav";
import information from "./information"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Blogs() {

  return (
    <>
      <Nav />

      {/* heading */}
      <div className="container" >
        <h2 style={{color:"orange", marginTop:80}}>Blogs</h2>
      </div>

      {/* blogs show  */}
      <div>
      <CardGroup style={{marginTop: -30, padding:40}}>
        {
          information.map((information, i ) =><Card key = {i} style={{ padding:30, marginRight: 30}}>
            <Card.Img variant="top" src={information.Picture} />
            <Card.Body>
              <Card.Title style={{color:"orange"}}> <b>{information.Heading}</b></Card.Title>
              <Card.Text className="text-justify">
               {information.Text}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{information.Update}</small>
            </Card.Footer>
          </Card>
            
            )
        }
      
     </CardGroup>
      </div>
    </>
  );
}

export default Blogs;
