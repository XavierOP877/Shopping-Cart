import {Link} from "react-router-dom"


let Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Shopping Cart</Link>
        </div>
        </nav>

    )
}

export default Navbar;