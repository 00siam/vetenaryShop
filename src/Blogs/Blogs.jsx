import Nav from "../NabBar/Nav";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Blogs() {

  let information = {
    firstHeading: "Heartbreaking Incidents Of Animal Cruelty In India",
    firstPic : "https://jaldeevets.com/wp-content/uploads/2023/02/Jaldee-Vets-Blog-Banners-43-768x512.png",
    firstText : "`India is famous for having a considerable number of street animals. While humans should be more sensitive to stray animals, it is quite the opposite in India. The homeless animals, apart from their struggles in life, have to suffer at the hands of humans. Many unsettling incidents of animal cruelty question humanity amongst humans.\nThis blog aims to bring notice to the poor condition of street animals in India. And the increasing violence against them. It is crucial to get the message out to the public that #StrayLivesMatter. And it is high time we start respecting the animals around us and their rights and preserving animal laws.\n Inhumane behavior against animals takes many forms and can be seen all over India. Even though some states and animal welfare organizations work hard to improve the life of strays. It is difficult because of people violating the laws. `",
    firstUpdate : "Last updated 3 mins ago",

    secondHeading : "5 Reasons Why Rabbits Make Great Pets",
    secondPic : "https://jaldeevets.com/wp-content/uploads/2023/02/Jaldee-Vets-Blog-Banners-40-768x512.png",
    secondText : " Pet parents around the world are more inclined towards cats or dogs. There is a whole war between cat people and dog people. But people often tend to overlook rabbits. One wrong perception about rabbits as pets is that they are a low-maintenance pet option for kids. But they are so much more than that. Rabbits have unique personalities. They can be as cuddly as a dog and follow their owners. Or they can have a more independent character like cats. Whatever the nature might be, these little furballs are the cutest. \nHow can people ignore rabbits? Their cute faces, tiny feet, hopping skills, and cute little bunny ears. Everything about them is so cute. We need more rabbit people in this world. If you are considering getting a pet and are open to the idea of a rabbit, here are some reasons to support that thought.",
    secondUpdate : "Last updated 10 mins ago", 

    thirdHeading: "5 Simple Foods That Can Be Poisonous For Dogs",
    thirdPic : "https://jaldeevets.com/wp-content/uploads/2023/02/Jaldee-Vets-Blog-Banners-39-768x512.png",
    thirdText : "`One thing to which all pet owners can agree is that whenever we open a packet of snacks, we will find our pooches looking at us with their puppy eyes. As if they are starving and have not had a meal for the entire day. Ultimately, we give in to their cuteness and share our food. In comparison, smaller portions may not cause a drastic health issue. But did you know many of our normal food items can be poisonous to dogs?\nUltimately, it is up to the pet parents what they want to include in their pets’ diet. So it is better to be aware of all foods that can be unhealthy for dogs. As a dog owner, you must be aware and alert about your pet’s consumption. And if that food can have any side effects.`",
    thirdUpdate : "Last updated 30 mins ago"

  }
 

  return (
    <>
      <Nav />

      <div className="container" >
        <h2 style={{color:"black", marginTop:80}}>Blogs</h2>
      </div>

      <div>
      <CardGroup style={{marginTop: -30, padding:40}}>
        {/* First blog  */}
      <Card style={{ padding:30, marginRight: 30}}>
        <Card.Img variant="top" src={information.firstPic} />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b>{information.firstHeading}</b></Card.Title>
          <Card.Text className="text-justify">
           {information.firstText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{information.firstUpdate}</small>
        </Card.Footer>
      </Card>
      <br />

      {/* Second block  */}
      <Card style={{ padding:30, marginRight: 30}}>
        <Card.Img variant="top" src= { information.secondPic } />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b> { information.secondHeading }</b></Card.Title>
          <Card.Text>
            { information.secondText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> { information.secondUpdate }</small>
        </Card.Footer>
      </Card>
      <br />

      {/* Third block  */}
      <Card  style={{ padding:30, marginRight: 30 }}>
        <Card.Img variant="top" src={ information.thirdPic} />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b> { information.thirdHeading }</b></Card.Title>
          <Card.Text>
            {information.thirdText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> { information.thirdUpdate }</small>
        </Card.Footer>
      </Card>
     
     
     </CardGroup>
      </div>

      <div>
      <CardGroup style={{marginTop: -30, padding:40}}>
        {/* First blog  */}
      <Card style={{ padding:30, marginRight: 30}}>
        <Card.Img variant="top" src={information.firstPic} />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b>{information.firstHeading}</b></Card.Title>
          <Card.Text className="text-justify">
           {information.firstText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{information.firstUpdate}</small>
        </Card.Footer>
      </Card>
      <br />

      {/* Second block  */}
      <Card style={{ padding:30, marginRight: 30}}>
        <Card.Img variant="top" src= { information.secondPic } />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b> { information.secondHeading }</b></Card.Title>
          <Card.Text>
            { information.secondText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> { information.secondUpdate }</small>
        </Card.Footer>
      </Card>
      <br />

      {/* Third block  */}
      <Card  style={{ padding:30, marginRight: 30 }}>
        <Card.Img variant="top" src={ information.thirdPic} />
        <Card.Body>
          <Card.Title style={{color:"orange"}}> <b> { information.thirdHeading }</b></Card.Title>
          <Card.Text>
            {information.thirdText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> { information.thirdUpdate }</small>
        </Card.Footer>
      </Card>
     
     
     </CardGroup>
      </div>
    </>
  );
}

export default Blogs;
