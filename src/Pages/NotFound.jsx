import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <h1>Page Not Found</h1>
    <Link to={`/`}>    <button className='hero-btn'
    style={{margin:'40px 0',background:'blueviolet'}}
    >Return to Home</button></Link>
</div>
  )
}

export default NotFound;