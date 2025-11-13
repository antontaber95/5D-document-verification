import { Link } from "react-router-dom";

export default function NavbarLinks() {
  return (
    <>
      <li>
        <Link to="/home">Start</Link>
      </li>
      <li>
        <Link to="/about">Documents</Link>
      </li>
    </>
  );
}
