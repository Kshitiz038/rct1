// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/About.css'
import Typed from 'typed.js'

const About = () => {
  const typedElement = useRef(null); // Create a ref for the element

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ['Welcome to I-Beat/s Homepage '], // Strings to display
      typeSpeed: 100, // Typing speed
    });

    // Clean up the Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="AboutBack">

        <div className="AboutPage" >
          <span className="My-span" ref={typedElement} ></span>

        </div>
        <div className="Info About Lytte">
          <p className="P Info">
            <h1 className="Quote">
              &quot;Music is the universal language of mankind.&quot;
            </h1>
            <h2 className="Information">
              <h2 className="Information1">
                Discover the Rhythm of Innovation:
              </h2>
              At I-Beat, we understand the transformative power of music. Our platform is committed to connecting you with the pulse of your favorite artists, the rhythms that move your soul, and the melodies that ignite your passion. Whether you are an experienced musician or a devoted listener, I-Beat serves as your gateway to a world where every beat narrates a story and every note reverberates with significance.
              
            </h2>
          </p>
        </div>
        <div className="ButtonForLyttePage">
          <button onClick={() => navigate('/Lytte')}><h3>Lets Lytte!</h3></button>
        </div>
      </div>
    </>
  );
};

export default About;