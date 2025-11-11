import { Link } from "react-router-dom";

export default function NavbarLinks() {
  return (
    <>
      <li>
        <Link to="/">Hem</Link>
      </li>
      <li>
        <Link to="/about">Blogg</Link>
      </li>
    </>
  );
}
