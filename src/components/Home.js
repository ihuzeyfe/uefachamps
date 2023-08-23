import React from 'react';
import HomeBg from "../assets/ballblack.jpg";
import "../style/Home.css";

export const Home = () => {
  return (
    <div>
      <img className='homeBg' src={HomeBg} alt=''/>
    </div>
  )
}
