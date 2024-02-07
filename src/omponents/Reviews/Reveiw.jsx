import { useOutletContext } from "react-router-dom";
import "./Review.css";

import React from 'react'

function Reveiw() {
  const {item} = useOutletContext();
  return (
    <>
    <div className="review">
      <h3>Rating : {item[0].rating}</h3>
      <h3>ReviewCount : {item[0].reviewCount}</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo corporis expedita sit! Quo, culpa distinctio. Vitae laborum dignissimos laudantium magni! Debitis nisi suscipit, rerum ea odit minus repellendus et repudiandae!</p>
    </div>
    </>
  )
}

export default Reveiw