import { Link } from "react-router-dom";

const Navbar = function () {
  return (
    <>
      <header>
        <nav>
          <ul style={{ backgroundColor: "lightblue", display: "flex", justifyContent: "center", marginTop: "-0.1rem", padding: "1rem" }}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Services"}>Services</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
