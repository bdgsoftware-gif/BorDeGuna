import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/", type: "link" },
    {
      name: "Brands",
      href: isHomePage ? "#brands" : "/#brands",
      type: "dropdown",
      items: [
        { name: "La La Dia", href: isHomePage ? "#brands" : "/#brands" },
        { name: "Bionic", href: isHomePage ? "#brands" : "/#brands" },
        { name: "All Brands", href: isHomePage ? "#brands" : "/#brands" },
      ],
    },
    { name: "Products", href: isHomePage ? "#products" : "/#products", type: "link" },
    { name: "Gallery", href: "/gallery", type: "link" },
    { name: "About", href: isHomePage ? "#vision" : "/#vision", type: "link" },
    { name: "Why Trust Us", href: isHomePage ? "#trust" : "/#trust", type: "link" },
    { name: "Contact", href: "#", type: "link" },
  ];


  // For PNG logo - replace with your actual logo path
  const logoUrl = "/logo.png"; // Place your logo.png in public folder

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              {navLinks.slice(0, 4).map((link) =>
                link.type === "dropdown" ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                            {link.items.map((item) => 
                              item.href.startsWith("/") ? (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                >
                                  {item.name}
                                </a>
                              )
                            )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="flex items-center space-x-3">
                {/* PNG Logo Container */}
                <div className="relative">
                  {/* Logo Background */}
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm"></div>

                  {/* PNG Logo */}
                  <div className="relative bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt="Bor de Guna"
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='%233A9B07'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z'/%3E%3Ccircle cx='12' cy='9' r='3' fill='white'/%3E%3C/svg%3E";
                        }}
                      />
                    ) : (
                      // Fallback SVG if PNG not found
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                          fill="currentColor"
                        />
                        <circle cx="12" cy="9" r="3" fill="white" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Brand Name */}
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Bor de Guna
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">
                    Since 2019
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {navLinks.slice(4).map((link) =>
                link.type === "dropdown" ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                            {link.items.map((item) => 
                              item.href.startsWith("/") ? (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                >
                                  {item.name}
                                </a>
                              )
                            )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )
              )}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors duration-300"
              >
                Shop Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div
                      key={link.name}
                      className="border-b border-gray-100 last:border-0"
                    >
                      {link.type === "dropdown" ? (
                        <details className="group">
                          <summary className="flex items-center justify-between py-4 text-gray-700 hover:text-primary cursor-pointer list-none">
                            <span className="font-medium">{link.name}</span>
                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="pb-4 pl-4">
                            {link.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-gray-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </details>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="block py-4 text-gray-700 hover:text-primary font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="block py-4 text-gray-700 hover:text-primary font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <button
                  className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Products
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className={`${scrolled ? "h-20" : "h-24"}`}></div>
    </>
  );
};

export default Navbar;
