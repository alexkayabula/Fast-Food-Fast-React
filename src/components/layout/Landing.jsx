import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the landing page.
 */

class Landing extends Component {
  render() {
    return (
      <section id="landing-page" className="flex-grow-1">
        <section id="featured-welcome">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block marg-lg-zeus">
                <h1 className="display-4 mt-4" >
                Welcome To Fast Food Fast, <br />
                Your Favourite Meal Is Just A Click Away
                </h1>
              </div>

              <div className="col-lg-4 my-5">
                
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
 
export default Landing;
