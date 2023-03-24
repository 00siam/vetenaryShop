import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "../NabBar/Nav";

import Doctorinformation from "../Doctorinformation/Doctorinfomation";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import ContactUs from "../Contact/ContactUs";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  //image link
  const image = {
    cat: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    rabbit:
      "https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg",
    dog: "https://media.istockphoto.com/id/1423830925/photo/young-vet-using-tablet-pc-at-her-work.jpg?b=1&s=170667a&w=0&k=20&c=LnDf46Em4I2ESrH4Rume_mbrZhwxB5ugJROGyCg5F7s=",
  };

  return (
    <>
      <Nav />

      <div style={{ marginTop: 80, border: "2px solid blck" }}>
        <Container>
          <Row style={{margin:20, padding: 20, height: 420}}>
            <Col  style={{marginTop: 40}}>
              <div style={{color: "orange"}}>
                <p style={{padding:40, textAlign: "justify", fontSize:"150%"}}>
                 <b> GOOD VETERINARIANS TALK TO ANIMALS. <br/><br /> GREAT VETERINARIANS HEAR THEM TALK BACK. </b>
                </p>
              </div>
            </Col>
            <Col>
              <div
                style={{backgroundColor: "grey", margin:10, padding:10, width: 700, height:370 }}
              >
                <Carousel >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image.cat}
                      style={{ height: 350 }}
                    />
                    <Carousel.Caption>
                      <h3>CAT</h3>
                      <p style={{ fontSize: 20 }}>
                        The cat is a domestic species of small carnivorous
                        mammal.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image.rabbit}
                      style={{ height: 350 }}
                    />

                    <Carousel.Caption>
                      <h3>Rabbit</h3>
                      <p style={{ fontSize: 20 }}>
                        Rabbit are small mammals in the family Leporidae of the
                        order Lagomorpha.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image.dog}
                      style={{ height: 350 }}
                    />

                    <Carousel.Caption>
                      <h3>Dog</h3>
                      <p style={{ fontSize: 20 }}>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <br />

      <Blogs foo={true} header ={true}/>

      <Doctorinformation foo={true} header ={true}/>
      <br />
      <AboutUs foo={true} header ={true}/>
      
      <ContactUs foo={true} header ={true}/>

      <Footer/>
    </>
  );
}

export default Home;
