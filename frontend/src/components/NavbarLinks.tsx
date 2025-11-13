import { Link } from "react-router-dom";

export default function NavbarLinks() {
  return (
    <>
      <li>
        <Link to="/home" className="text-2xl">Start</Link>
      </li>
      <li>
        <Link to="/about" className="text-2xl">Documents</Link>
      </li>
    </>
  );
}
