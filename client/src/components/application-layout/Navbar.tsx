import "../../styles/navbar.css"
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/post">Post by ID</Link>
    </nav>
  );
}

export default Navbar;
