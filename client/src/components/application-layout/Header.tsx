import "../../styles/header.css";
import Navbar from "./Navbar";

function Header() {
  // The title that appears at the top of the site on every page
  return (
    <header>
      <section>
      {/* logo */}
      <img src="/logo.png" alt="logo" />
      <h1>LinKodCode</h1>
      </section>
      <Navbar/>
    </header>
  );
}

export default Header;
