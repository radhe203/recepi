import React from 'react'
import "./Steps.css"
import { useOutletContext } from 'react-router-dom';

function Steps() {
  const {item}=useOutletContext()
  return (<>
    <div className="steps">
    <h1>Please Follow These Steps</h1>
    <hr />

    <div className="real-steps">
      <ol type="1">
        {item[0].instructions.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ol>
    </div>
    <p>
      || Now you are done.you can serve it to{" "}
      <span>{item[0].servings}</span> pepoles. ||
    </p>
  </div> 
  </>
  )
}

export default Steps