import "../../styles/header.css";

function Header() {
  // The title that appears at the top of the site on every page
  return (
    <header>
      {/* logo */}
      <img src="../../public/logo.png" alt="logo" />
      <h1>LinKodCode</h1>
    </header>
  );
}

export default Header;
