import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css"
import { Link } from "react-router-dom";
import Nav from "../components/Nav";


const Details = () => {

// create the useParams constant to update the params state
const {id} = useParams();

// Crate a useState Variable to manage the item state
const [item, setItems] = useState(null)

//console.log(item);
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        setItems(response.data);
        console.log(response); // Check point to test the response. object received!
    })
    .catch((error)=>console.error(error))
},[id])    

if (!item) return <p>Loadign</p> ;

// Function to render star rating
const renderStars = (rating) => {
    const maxStars = 5;
    return (
      <div className="stars">
        {[...Array(maxStars)].map((_, index) => (
          <span key={index} className={index < Math.round(rating) ? "filled-star" : "empty-star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

    return (
        <>
            <div className="ItemDetailsMainConTainer">
                <Link className="LinkToHomePage" to="/" >Home</Link>
                <h3 className="itemDetailsHeader">{item.title}</h3>
                <div className="itemDetailsImageContainer">
                    <img className="itemDetailsImage" src={item.image} alt="itemImage" />
                </div>
                <p>{item.description}</p>

                {/* Star rating element*/}
                <div className="star-rating">
                        {renderStars(item.rating.rate)}
                        <span> ({item.rating.count} reviews)</span>
                 </div>

                <p className="ItemDetailsPrice">Price: ${item.price}</p>

                <div className="itemdetailsQuantity">
                    <p>Quantity</p> 
                    <select className="itemDetailsQuantitySelector" name="quantity" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="ItemDetailsAddToCartLink" rel="stylesheet" type="submit" href="addToCart">Add To Cart</button> 
                </div>
                
            </div>
            
        </>
    )
}

export default Details;