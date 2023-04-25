import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <div className="navBar">
            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/about">About us</Link>
        </div>
    )
}
export default Navbar;