import React, {useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";


import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity
} from "./Animations"

import dallas from '../images/dallas.webp';
import austin from '../images/austin.webp';
import newyork from '../images/newyork.webp';
import sanfrancisco from '../images/sanfrancisco.webp';
import Beijing from '../images/beijing.webp';


const cities = [
  {name: 'Dallas', image: dallas},
  {name: 'Austin', image: austin},
  {name: 'New York', image: newyork},
  {name: 'San Francisco', image: sanfrancisco},
  {name: 'Beijing', image: Beijing}
]

const Hamburger = ({ state }) => {
  //Vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);
  let cityBackground = useRef(null); 
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

 useEffect(() => {
   if(state.clicked === false){
     // close our menu
     gsap.to([revealMenu, revealMenuBackground], {
       duration: 0.8,
       height: 0,
       ease: "power3.inOut",
       stagger: {
        amount: 0.07
      }
    });
    gsap.to(menu, {
      duration: 1,
      css: { display: "none" }
    });
   } else if(state.clicked === true || 
    (state.clicked === true && state.initial === null)
    ) {
     // open our menu 
     gsap.to(menu, {
       duration: 0,
       css: { display: "block" }
     });
     gsap.to([revealMenuBackground, revealMenu], {
       duration: 1,
       opacity: 1,
       height: "100%",
       transformOrigin: "right top",
       skewY: 0,
       ease: "power3.inOut",
       stagger: {
        amount: 0.07
      }
       
     });
     staggerReveal(revealMenuBackground, revealMenu);
     fadeInUp(info);
     staggerText(line1, line2, line3);
   }
}, [state]);







  return (
  <div ref={el => (menu = el)} className="hamburger-menu">
  <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color">
  <div ref={el => (revealMenu = el)} className="menu-layer">
  <div ref={el => (cityBackground = el)} className="menu-city-background">

    </div>
  <div className="container">
      <div className="wrapper">
        <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link 
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line1 = el)} to="/opportunities" >Opportunities</Link>
                </li>
                <li>
                  <Link 
                   onMouseEnter={e => handleHover(e)}
                   onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line2 = el)} to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link 
                   onMouseEnter={e => handleHover(e)}
                   onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line3 = el)} to="/contact-us">Contact us</Link>
                </li>              
              </ul>
            </nav>
            <div ref={el => (info = el)} className="info" style={{opacity: 0.7}}>
              <h3>Our Promises</h3>
              <p>
              Non fugiat sint et repellat atque qui quaerat quia hic fugit 
              inventore et unde voluptate et totam expedita id autem libero. 
              Vel consectetur harum aut temporibus vitae qui fuga magni ut 
              internos recusandae. 33 quaerat error eos eligendi libero quo 
              maiores voluptate.
              </p>
            </div>
            <div className="locations">
              Locations:
            {cities.map(el =>  (
              <span 
              key={el.name} 
              onClick={() => handleCity(el.image, cityBackground)} 
              onMouseOut={() => handleCityReturn(cityBackground)}>
                {el.name}
              </span>
            ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Hamburger;