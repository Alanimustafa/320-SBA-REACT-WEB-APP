import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const Details = () => {

// create the useParams constant to update the params state
const {id} = useParams();

const [item, setItems] = useState(null)

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        setItems(response.data);
        console.log(response); // Check point to test the response. object received!
    })
    .catch((error)=>console.error(error))
},[id])    

    return (
        <>
            <h1>This is the details page</h1>
        </>
    )
}

export default Details;