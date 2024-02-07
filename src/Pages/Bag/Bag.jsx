import React, { useContext } from "react";
import "./Bag.css";
import { GetRecipe } from "../../Context";
import { Link } from "react-router-dom";
function Bag() {
  const { bag , DeleteBag } = useContext(GetRecipe);
  const item = bag.map((e, i) => {
    return (
     
        <div className="bag-item" key={i}>
           <Link  to={`/recipe/${e.id}`}>
          <img src={e.image} alt="" />
          <span>{e.name}</span></Link>
          <button onClick={()=>{
             DeleteBag(e.id)
          }}>Remove</button>
        </div>
      
    );
  });
  return (
    <>
      <div className="bag">
        <h1>you have {bag.length} recipes</h1>
        <hr />
        <div className="bag-list">
          {item}
        </div>
      </div>
    </>
  );
}

export default Bag;
