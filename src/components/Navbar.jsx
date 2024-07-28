import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "/assets/logo.png";
import profilePic from "/assets/profile-pictures/user1.jpg";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        closeProfileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl font-ubuntu font-semibold tracking-tight">
              <Link to="/">commUnityLink</Link>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>
                  <span className="text-white hover:text-orange-500 transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <span className="text-white">
              Hello, <span className="text-orange-500">Aniket</span>
            </span>
            <div className="relative" ref={profileMenuRef}>
              <img
                src={profilePic}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500 transition-colors duration-300"
                onClick={toggleProfileMenu}
              />
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/10 border border-neutral-700 rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-neutral-700 transition-colors duration-300"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-white hover:bg-neutral-700 transition-colors duration-300"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => console.log("Logout")}
                        className="w-full text-left px-4 py-2 text-sm text-white hover:bg-red-500 transition-colors duration-300"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
