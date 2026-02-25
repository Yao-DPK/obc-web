import React from 'react';
import './page.css'; // We'll define styles here

export default function Test(){
    return (
        <div className="app-container">
          {/* Background Image with Overlay */}
          <div className="background-image">
            <img src="./Fab.jpeg"
                 alt="Background Image" />
            <div className="background-overlay"></div>
          </div>

          {/* Title */}

          <div className="header">
            <p> OLYMPIC BASKETBALL CENTER</p>

              <nav className="navbar">
              <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Centered Content */}
          <div className="content">
            <p>
              BIENVENUE SUR LE SITE OFFICIEL DE L'OBC BASKET
            </p>
          </div>
        </div>
      );
    }
