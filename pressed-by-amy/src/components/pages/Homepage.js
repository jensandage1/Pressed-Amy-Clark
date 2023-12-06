import { Carousel } from 'react-bootstrap';
import Featured from '../Featured';
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
        <img className="img-scroll"
        src= {tiffany.image}
        alt="Breakfast at Tiffany's nails"
        />
        <Carousel.Caption>
          <h3 className="scroll-font">{tiffany.title}</h3>
          <p className="scroll-font">Get custom sets made!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="img-scroll"
        src= {cafe.image}
        alt="coffee themed nails"
        />
        <Carousel.Caption>
          <h3 className="scroll-font">{cafe.title}</h3>
          <p className="scroll-font">Want different lengths?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="img-scroll"
        src= {rainbow.image}
        alt="Funky Rainbow nails"
        />
        <Carousel.Caption>
          <h3 className="scroll-font">{rainbow.title}</h3>
          <p className="scroll-font">Want a design in a different color?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <p className="section-headline">Featured Sets</p>
      <Featured />
    </div>
        </div>
    );
}