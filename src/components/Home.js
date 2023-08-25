import React from 'react';
import {Link} from "react-router-dom";
import "../style/Home.css";

export const Home = () => {
  return (
    <div className='homeBg'>
      <div className='order'>
      <Link to="/clubs">
      <button className='clubs'>
          CLUBS
        </button>
      </Link>
      </div>
    </div>
  )
}
