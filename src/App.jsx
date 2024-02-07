import './App.css'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home'
import Recipe, { loader as loaderRecipe } from "./Pages/Recipe/Recipe"
import RecipeView, { loader } from './Pages/RecipeView/RecipeView'
import Bag from './Pages/Bag/Bag'
import Steps from "./omponents/Steps/Steps"
import Health from "./omponents/Health/Health"
import Review from "./omponents/Reviews/Reveiw"
import Error from './Pages/Error'
import NotFound from './Pages/NotFound'
import React from 'react'
function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} errorElement={<Error/>}>
        <Route index element={<Home/>}/>
        <Route path='recipe' element={<Recipe/>} loader={loaderRecipe}/>
        <Route path='bag' element={<Bag/>}/>
        <Route path='recipe/:id' element={<RecipeView/>} loader={loader}>
          <Route index element={<Steps/>}/>
          <Route path='health' element={<Health/>}/>
          <Route path='review' element={<Review/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
