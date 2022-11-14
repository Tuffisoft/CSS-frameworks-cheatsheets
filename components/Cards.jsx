import React from "react";
import { Link } from "react-router-dom";
import './cards.css';



export default function Navbar() {

    return (
      <div className="cards-container">
      <div className="card">
        <div className="card-content">
          <img
            src={"./bulma.png"}
            className="card-image"
          />

          <div className="card-text">
            <h4>Bulma</h4>
            <Link to="/bulma">
            <button>learn more</button>    
            </Link>   
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img
            src={"./tailwind-pre.png"}
            className="card-image"
          />

          <div className="card-text">
            <h4>Tailwind</h4>
            <Link to="/tailwind">
            <button>learn more</button>    
            </Link>   
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img
            src={"./twitter-og-image.png"}
            className="card-image"
          />

          <div className="card-text">
            <h4>Chakra</h4>
            <Link to="/chakra">
            <button>learn more</button>    
            </Link>   
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <img
            src={"./ant-design.jpg"}
            className="card-image"
          />

          <div className="card-text">
            <h4>ANT Design</h4>
            <Link to="/ant">
            <button>learn more</button>    
            </Link>   
          </div>
        </div>
      </div>
      </div>
    )
  }