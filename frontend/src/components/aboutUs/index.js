
import React from 'react'
import './about_us.css'
import { Card } from 'react-bootstrap';
export default function AboutUs (){


    return (

        <>
        <div className="about_us_parant">

            <div className="about_us_cheldren">

                 <p><span>A</span>bout <span id = "us">us</span> </p>           
 
            </div>

            <div className = "about_us_cheldren2">

                <p>Our website specializes in booking more than one category , Allows the user to book according to the category available through our website</p>
            </div>


        </div>

        <div className="ourteam">

        <div className="about_us_cheldren">

<p><span>A</span>bout <span id = "us">us</span> </p>           

</div>

<div className = "about_us_cheldren2">

<p>Our website specializes in booking more than one category , Allows the user to book according to the category available through our website</p>
</div>

        </div>

        <div className="card_parant">
             <div className="card_chldren">
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
             </div>
             <div className="card_chldren">
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
             </div>
             <div className="card_chldren">
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
             </div>
             <div className="card_chldren">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card> 
             </div>

        </div>
        </>
    )

}