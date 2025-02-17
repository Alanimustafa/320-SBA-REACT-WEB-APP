import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./categories.css"
import { Link } from "react-router-dom";

function Womens() {
    const [womens, setWomens] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                // Filtering only men's clothing items
                const filteredMens = response.data.filter(item => item.category === "women's clothing");
                setWomens(filteredMens);
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
                <h1>Women's Clothing</h1>
                <div className="cats-items">
                    {womens.length > 0 ? (
                        womens.map((item) => (
                            <div key={item.id} className="cats-item">
                                <Link className="LinkToItemDetails" to={`/details/${item.id}`}>
                                    <h4 className="ItemCardHeader">{item.title}</h4>                
                                </Link>                                
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
                <h5 className='SBA-Title'>SBA-320 - React web application</h5>
                <p className='mustafaAlani'>Mustafa Alani - PER SCHOLAS RTT-55</p>
            </div>
        </>
    );
}

export default Womens;
