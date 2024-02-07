import React from 'react'
import "./Health.css"
import { useOutletContext } from 'react-router-dom'
function Health() {
  const {item} = useOutletContext();
const total =item[0].caloriesPerServing * item[0].servings;
  return (
    <>
    <div className="health">
      <h3>caloriesPerServing:{item[0].caloriesPerServing}</h3>
      <h3> Total Calories:{total}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatem porro illum amet corporis commodi nobis nulla nam aut consectetur quia, itaque quae qui voluptatibus incidunt perspiciatis officia, facere eligendi.</p>
    </div>
    </>
  )
}

export default Health