import { Carousel } from 'react-bootstrap';
import "../../styles/homepage.css";
import breakfastAtTiffanys from "../../assets/breakfast-at-tiffanys.jpg";
import cafeAuLait from "../../assets/cafe-au-lait.jpg";
import funkyRainbow from "../../assets/funky-rainbow.jpg";

const tiffany = {
  title: 'Breakfast at Tiffanys',
  image: breakfastAtTiffanys
};

const cafe ={
  title: 'Cafe Au Lait',
  image: cafeAuLait
};

const rainbow = {
  title: 'Funky Rainbow',
  image: funkyRainbow
};


export default function Homepage(){
    return (
        <div>
             <Carousel className="carousel">
      <Carousel.Item>
        <img
        src= {tiffany.image}
        alt="Breakfast at Tiffany's nails"
        />
        <Carousel.Caption>
          <h3>{tiffany.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src= {cafe.image}
        alt="coffee themed nails"
        />
        <Carousel.Caption>
          <h3>{cafe.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src= {rainbow.image}
        alt="Funky Rainbow nails"
        />
        <Carousel.Caption>
          <h3>{rainbow.title}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}