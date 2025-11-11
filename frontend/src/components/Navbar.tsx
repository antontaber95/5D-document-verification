import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <nav className="navbar fixed top-0 md:top-2 bg-base-300 md:w-[70%] w-full md:rounded-4xl transition-transform duration-500 opacity-70 md:opacity-60 md:hover:opacity-70">
          <div className="w-full flex items-center">
            <NavbarItems />
          </div>
        </nav>
      </div>
    </div>
  );
}