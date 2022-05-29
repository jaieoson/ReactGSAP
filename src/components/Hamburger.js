import React, {useEffect, useRef} from "react";
import { Link } from 'react-router-dom';


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
     menu.style.display = 'none';
    
   } else if(state.clicked === true || 
    (state.clicked === true && state.initial === null)
    ) {
     // open our menu 
     menu.style.display = 'block';
   }
})

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
                  <Link ref={el => (line1 = el)} to="/opportunities" >Opportunities</Link>
                </li>
                <li>
                  <Link ref={el => (line2 = el)} to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link ref={el => (line3 = el)} to="/contact-us">Contact us</Link>
                </li>              
              </ul>
            </nav>
            <div ref={el => (info = el)} className="info">
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
              <span>Dallas</span>
              <span>Austin</span>
              <span>New York</span>
              <span>San Francisco</span>
              <span>Beijing</span>
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