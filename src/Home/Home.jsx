import Carousel from "react-bootstrap/Carousel";
import Nav from "../NabBar/Nav";

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

      <div>
        <Carousel fade style={{marginTop:55}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.cat}
              style={{ height: 600 }}
            />
            <Carousel.Caption>
              <h3>CAT</h3>
              <p style={{ fontSize: 20 }}>
                The cat is a domestic species of small carnivorous mammal.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.rabbit}
              style={{ height: 600 }}
            />

            <Carousel.Caption>
              <h3>Rabbit</h3>
              <p style={{ fontSize: 20 }}>
                Rabbit are small mammals in the family Leporidae of the order
                Lagomorpha.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.dog}
              style={{ height: 600 }}
            />

            <Carousel.Caption>
              <h3>Dog</h3>
              <p style={{ fontSize: 20 }}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home;
