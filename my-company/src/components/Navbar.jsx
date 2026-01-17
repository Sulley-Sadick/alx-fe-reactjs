import { Link } from "react-router-dom";

const Navbar = function () {
  return (
    <>
      <header>
        <nav>
          <ul>
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
