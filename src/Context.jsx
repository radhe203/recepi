import React, { Children, createContext, useEffect, useReducer, useState } from "react";

export const GetRecipe = createContext([]);

export async function getData() {
  const res = await fetch("https://dummyjson.com/recipes?limit=50")
  const data = await res.json()
  return data;
}


function Context({children}) {

  const [data , SetData] = useState([])
 useEffect(()=>{
  async function extractData(){
    let rdata = await getData()
    SetData(rdata.recipes)
  }
  extractData();
 },[])


  function bagReducer(state,action){
    let newState = state;
    if(action.type === "ADD"){
      let newitem = data.find((e)=> e.id === action.payload.id)
      newState = [
        newitem,...state
      ]
    }
    else if(action.type === "DELETE"){
      newState = state.filter(e => e.id !== action.payload.id )
    }
    return newState;
  }
  const [bag,Dispatchbag] = useReducer(bagReducer,[])
function AddBag(id){
  Dispatchbag({
    type:'ADD',
    payload:{
      id,
    }
  })
}
function DeleteBag(id){
  Dispatchbag({
    type:'DELETE',
    payload:{
      id,
    }
  })
}

  return (
    <>
      <GetRecipe.Provider value={{
        bag,
        AddBag,
        DeleteBag,
      }}>
        {children}
      </GetRecipe.Provider>
    </>
  );
}

export default Context;
