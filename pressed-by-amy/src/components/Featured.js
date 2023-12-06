import "../styles/homepage.css";

import evilEye from "../assets/evil-eye.jpg";
import mermaidMadness from "../assets/mermaid-madness.jpg";
import coolLace from "../assets/cool-lace.jpg";
import itsFall from "../assets/its-fall-yall.jpg";
import stainedGlass from "../assets/stained-glass-beauty.jpg";
import prettyPink from "../assets/pertty-in-pink.jpg";

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

  const fall = {
    title: "It's Fall Y'all",
    image: itsFall
  };

  const stained = {
    title: "Stained Glass Beauty",
    image: stainedGlass
  };

  const prettyInPink = {
    title: "Pretty In Pink",
    image: prettyPink
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
            <div>
            <img className="featured-img"
            src= {fall.image}
            alt="Fall colored nails"
            />
            <p className="featured-nail-titles">{fall.title}</p>
            </div>
            <div>
            <img className="featured-img"
            src= {stained.image}
            alt="Stained glass inspired nails"
            />
            <p className="featured-nail-titles">{stained.title}</p>
            </div>
            <div>
            <img className="featured-img"
            src= {prettyInPink.image}
            alt="pink nails"
            />
            <p className="featured-nail-titles">{prettyInPink.title}</p>
            </div>
            
        </div>
    )
};