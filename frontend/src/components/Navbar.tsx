import { ListIcon } from "@phosphor-icons/react";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <nav className="navbar top-0 md:top-2 bg-base-300 md:w-[70%] w-full md:rounded-4xl transition-transform duration-500 opacity-70 md:opacity-60 md:hover:opacity-70">
          <div className="w-full flex items-center">
            {/* Small screens */}
            <div className="flex-1 md:hidden">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
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
            {/* Big screens */}
            <div className="hidden flex-1 md:block">
              <ul className="menu menu-horizontal px-1">
                <NavbarLinks />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
