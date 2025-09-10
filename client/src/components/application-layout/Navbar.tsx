import "../../styles/navbar.css"
import { Link } from "react-router";

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
