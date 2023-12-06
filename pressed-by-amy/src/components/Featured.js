import "../styles/homepage.css";

import evilEye from "../assets/evil-eye.jpg";
import mermaidMadness from "../assets/mermaid-madness.jpg";
import coolLace from "../assets/cool-lace.jpg";

const evil = {
    title: 'Evil Eye',
    image: evilEye
  };
  
  const mermaid = {
    title: 'Mermaid Madness',
    image: mermaidMadness
  };
  
  const lace = {
    title: 'Cool Lace',
    image: coolLace
  };

export default function Featured() {
    return(
        <div className="flex-container">
            <div>
            <img className="featured-img"
            src= {evil.image}
            alt="Evil eye on long nails"
            />
            <p className="featured-nail-titles">{evil.title}</p>
            </div>
            <div>
            <img className="featured-img"
            src= {mermaid.image}
            alt="Evil eye on long nails"
            />
            <p className="featured-nail-titles">{mermaid.title}</p>
            </div> 
            <div>
            <img className="featured-img"
            src= {lace.image}
            alt="Evil eye on long nails"
            />
            <p className="featured-nail-titles">{lace.title}</p>
            </div>
            
        </div>
    )
};