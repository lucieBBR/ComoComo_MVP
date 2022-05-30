import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeView.css";
import fridgeImg from "../images/fridge.png"
import textboxImg from "../images/textbox.png"


function HomeView() {
    return (
        <div className="HomeView">
          <h1>WHAT'S IN MY FRIDGE?</h1>
          <div className="row text-center">
            {/* <div className="col d-flex justify-content evenly"> */}
            <div className="col-offset-5">
              <Link to={'/getmeal'}>
              <img src={fridgeImg} alt="Big Fridge Vector - Refrigerator@seekpng.com" />
              </Link>
              {/* <img src={textboxImg} alt="text box explaning the user to click on the fridge in order to open the form to enter ingredients" /> */}
            </div>
          </div>
        </div>   
    );
}

export default HomeView;