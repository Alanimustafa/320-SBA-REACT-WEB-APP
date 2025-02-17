import { Link } from "react-router-dom"
import "./Nav.css"


export default function Nav () {
    return (
        <>
        <nav className="NavMainContainer">
            <Link className="NavLink" to="/">
                  <p className="NavLinkParagraph">Home</p>
            </Link>
            <Link className="NavLink" to="/mens">
                 <p className="NavLinkParagraph" >Men's</p>
            </Link>
            <Link className="NavLink" to="/jewelery">
                 <p className="NavLinkParagraph" >Jewelery</p>
            </Link>
            <Link className="NavLink" to="/electronics">
                 <p className="NavLinkParagraph" >Electronics</p>
            </Link>

        </nav>
        </>
    ) 
}