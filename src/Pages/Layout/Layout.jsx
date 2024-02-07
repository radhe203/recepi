import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../../omponents/Nav/Nav';
import "./Layout.css"
import Footer from '../../Footer';
function Layout() {
  return (
   <>
   <Nav/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout;