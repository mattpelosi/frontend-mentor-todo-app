import React from 'react';
import moonIcon from '../assets/images/icon-moon.svg'; // in public
import sunIcon from '../assets/images/icon-sun.svg'; // in public

const Heading = (props) => {
  return (
    <div className="heading-container">
      <h1>TODO</h1>
      <button
        type="button"
        onClick={() => {
          props.setDarkMode((dm) => !dm);
        }}
      >
        {props.darkMode ? (
          <img className="icon" src={moonIcon} alt="Moon Icon" />
        ) : (
          <img className="icon" src={sunIcon} alt="Sun Icon" />
        )}
      </button>
    </div>
  );
};

export default Heading;
