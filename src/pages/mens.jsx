import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./mens.css"
import { Link } from "react-router-dom";

function Mens() {
    const [mens, setMens] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                // Filtering only men's clothing items
                const filteredMens = response.data.filter(item => item.category === "men's clothing");
                setMens(filteredMens);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className="CatsMainContainer">
                <h1>e-Shopping</h1>
                <Nav />
                <h1>Men's Clothing</h1>
                <div className="cats-items">
                    {mens.length > 0 ? (
                        mens.map((item) => (
                            <div key={item.id} className="cats-item">
                                <div className="catHeader">
                                    <h3 className="cath3Header">{item.title}</h3>
                                </div>
                                <div className="catImageDiv">
                                    <img className="catimageTag" src={item.image} alt={item.title}/>    
                                </div>

                                <div className="catItemDescription">
                                    <p className="catItemDescriptionParagraph">{item.description}</p>
                                </div>
                                <div className="ItemCardMoreDetailsLinkContainer">
                                     <p className="ItemCardPrice">Price : ${item.price}</p> 
                                    <Link className="ItemCardMoreDetailsLink" to={`/details/${item.id}`}>more dedails...</Link>
                                </div>
                            </div>
                            
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Mens;
