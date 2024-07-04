import { Link, Outlet } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Layouts = () => {
  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen">
      <header className="bg-gray-200 mb-4">
        <div className="container flex items-center justify-between mx-auto p-4 md:w-[600px]">
          <Link to="/">
            <div className="logo p-2 hover:bg-gray-400 rounded-lg cursor-pointer text-xl font-semibold">
              LOGO
            </div>
          </Link>

          <div
            className={`menu hidden md:flex gap-2 ${isOpen ? "" : "hidden"}`}
          >
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.url}
                className="hover:bg-gray-400 rounded-lg p-2 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <div className="p-1 hover:bg-gray-400 rounded-lg cursor-pointer">
              <CiDark size={24} />
            </div>
          </div>

          
            <button
              id="menu-btn"
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <FaBars size={24} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-[170px] bg-white shadow-lg rounded-lg p-2 w-48">
                {menuItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.url}
                    className="block px-4 py-2 hover:bg-gray-400 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          
        </div>
      </header>

      <main className="container md:w-[600px] mx-auto p-4">
        <Outlet />
      </main>

      <footer className="container flex items-center justify-between md:w-[600px] mx-auto p-4">
        Footer
      </footer>
    </div>
  );
};

export default Layouts;
