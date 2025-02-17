import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'
import Nav from './components/Nav'

import './App.css'

function App() {
  
  // Create the Items State contant to manage the state using useState with a default empty array.
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response => {setItems(response.data) // getting the data array and update the items setter (setItems)
       console.log(response.data) // Testing the response from the API Source.
    })
    .catch((error)=>{console.error(error)})
  },[])
  
  // console.log(items) // Testing the items current state
  return (
    <>
    
       <div className="HomePageMainContainer">
          <div className="mainPageHeader">
          
            <h1 className='appLogo'>e-Shopping</h1> 
            <Nav></Nav>
          </div>
          <div className="itemListHomePage">
            {/* Passign the items prop to the ItemList component */}
            <ItemList items={items} />
          </div>
        </div>
        <h5 className='SBA-Title'>SBA-320 - React web application</h5>
        <p className='mustafaAlani'>Mustafa Alani - PER SCHOLAS RTT-55</p>
    </>
  )
}

export default App
