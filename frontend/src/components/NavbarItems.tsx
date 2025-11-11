import { ListIcon } from "@phosphor-icons/react";
import NavbarLinks from "./NavbarLinks.tsx";

export default function NavbarItems() {
  return (
    <>
      <div className="flex-1 md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <ListIcon size={32} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavbarLinks />
          </ul>
        </div>
      </div>
      <div className="hidden flex-1 md:block">
        <ul className="menu menu-horizontal px-1">
          <NavbarLinks />
        </ul>
      </div>
    </>
  );
}
