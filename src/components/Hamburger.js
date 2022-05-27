import React from "react";
import { Link } from 'react-router-dom';

const Hamburger = () => {

  return (

<div className="hamburger-menu">
  <div className="menu-secondary-background-color">
  <div className="menu-layer">
    <div className="menu-city-background">

    </div>
  <div className="container">
      <div className="wrapper">
        <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link to="/opportunities">Opportunities</Link>
                </li>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>              
              </ul>
            </nav>
            <div className="info">
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