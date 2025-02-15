import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'

import './App.css'

function App() {
  
  // Create the Items State contant to manage the state using useState with a default empty array.
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response => {setItems(response.data) // getting the data array and update the items setter (setItems)
      // console.log(response.data) // Testing the response from the API Source.
    })
    .catch((error)=>{console.error(error)})
  },[])
  
  // console.log(items) // Testing the items current state
  return (
    <>
       <div className="HomePageMainContainer">
          <div className="mainPageHeader">
          <h5>SBA-320 - React web application</h5>
            <h1>e-Shopping</h1> 
          </div>
          <div className="itemListHomePage">
            {/* Passign the items prop to the ItemList component */}
            <ItemList items={items} />
          </div>
        </div>
    </>
  )
}

export default App
