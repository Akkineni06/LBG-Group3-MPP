import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className= "Navbar">
    
      <h1>WE-SELL-ANY-HOUSE Estate Agents</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/manageseller">Manage Seller</Link>
        </li>
        <li>
          <Link to="/managebuyer">Manage Buyer</Link>
        </li>
        <li>
          <Link to="/manageproperties">Manage Properties</Link>
        </li>
        <li>
          <Link to="/searchproperties">Search Properties</Link>
        </li>
        {/* <li>
          <Link to="/managebooking">Manage Booking</Link>
        </li> */}
      </ul>
      </nav>    
  );
}

export default Navbar;
