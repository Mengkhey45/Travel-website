import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Popular", href: "#popular" },
    { name: "Explore", href: "#explore" },
  ];

  const handleClick = (e, href, name) => {
    e.preventDefault();
    setActive(name);
    setIsMenuOpen(false);

    if (href === "#") {
      // Scroll back to the top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to the respective section smoothly
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav className="w-full h-15 fixed z-50 flex justify-between items-center py-6 px-8 md:px-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
        {/* Logo */}
        <a href="#" onClick={(e) => handleClick(e, "#", "Home")}>
          <h1 className="font-semibold text-white cursor-pointer">Travel</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-10 font-semibold text-base text-black xl:text-black relative">
          {navItems.map((item) => (
            <li key={item.name} className="p-3 relative cursor-pointer">
              <a
                href={item.href}
                className="no-underline"
                onClick={(e) => handleClick(e, item.href, item.name)}
              >
                {item.name}
              </a>
              <span
                className={`absolute bottom-[8px] left-1/2 transform -translate-x-1/2 h-[3px] bg-white rounded-full transition-all duration-300 ${
                  active === item.name ? "w-full scale-x-100 origin-left" : "w-0 scale-x-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white text-4xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-15 left-0 w-full flex flex-col items-center gap-0 font-semibold text-lg transition-transform duration-300 text-white ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          } xl:hidden`}
        >
          <div className="absolute inset-0 bg-black/80 rounded-bl-lg rounded-br-lg z-0 backdrop-blur-lg"></div>

          {navItems.map((item) => (
            <li
              key={item.name}
              className="list-none w-full text-center p-4 hover:bg-gray-400 transition-all cursor-pointer z-10"
              onClick={(e) => handleClick(e, item.href, item.name)}
            >
              <a href={item.href} className="no-underline text-white">
                {item.name}
              </a>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
