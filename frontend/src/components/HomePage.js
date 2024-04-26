// HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import homeImage from '../styles/Images/todolist.jpg'; // Update the path according to your directory structure // Replace with your image path


const HomePage = () => {
    return (
      <div className="home-container">
        <div className="home-text">
          <h2>Welcome to Family Tasker</h2>
          <p>Managing responsibilities can be a drag, but my simple to-do app makes it a breeze. 
            Easily assign tasks to each family member at home, and once they're completed, you can swiftly delete them. 
            And hey, don't forget to treat yourself with your favorite candy as a reward for a job well done!</p>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    );
  };
  
  export default HomePage;

