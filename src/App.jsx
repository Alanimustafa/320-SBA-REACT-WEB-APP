import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  
  // Create the Items State contant to manage the state using useState with a default empty array.
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response => {setItems(response)
      console.log(response) // Testing the response from the API Source.
    })
  },[])

  return (
    <>
      <h1>Fake Store React Applicaiton</h1>
    </>
  )
}

export default App
