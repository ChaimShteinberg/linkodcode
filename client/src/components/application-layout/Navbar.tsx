import "../../styles/navbar.css";
import { Link } from "react-router";

function Navbar() {
  // Button at the top of the page 
  // to navigate to the home page at any stage
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
