import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  openQRModal: () => void;
}

function Header({ openQRModal }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // If we're on the home page, we need to handle section scrolling
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = ["home", "experience", "tickets", "info", "about"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      // Initial check to set active section on page load
      handleScroll();
      
      // Check if there's a hash in the URL and scroll to that section
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // If we're on a different page, set the active section based on the path
      const pathWithoutSlash = location.pathname.substring(1);
      if (pathWithoutSlash) {
        setActiveSection(pathWithoutSlash);
      }
    }
  }, [location.pathname, location.hash]);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "experience", label: "Experience", path: "/#experience" },
    { id: "tickets", label: "Tickets", path: "/#tickets" },
    { id: "info", label: "Info", path: "/#info" },
    { id: "policies", label: "Policies", path: "/policies" },
    { id: "sponsors", label: "Sponsors", path: "/sponsors" },
    { id: "about", label: "About Sanskriti", path: "/#about" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (item: { id: string; path: string }) => {
    setIsNavOpen(false);
    
    // If it's the home link and we're already on the homepage, scroll to top
    if (item.id === "home") {
      if (location.pathname === "/") {
        scrollToTop();
      } else {
        // If we're on a different page (like Policies or Sponsors), navigate to home
        navigate("/");
      }
      return;
    }
    
    // If it's a section link and we're already on the homepage
    if (item.path.startsWith("/#") && location.pathname === "/") {
      const sectionId = item.path.substring(2);
      scrollToSection(sectionId);
      return;
    }
    
    // If it's a section link but we're on a different page (like Policies)
    if (item.path.startsWith("/#") && location.pathname !== "/") {
      const sectionId = item.path.substring(2);
      // Navigate to homepage and then scroll to section
      navigate("/");
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
  };

  // Handle Policies link click to ensure it scrolls to top
  const handlePoliciesClick = () => {
    // We don't prevent default here, allowing the normal navigation to occur
    // The useEffect in PoliciesPage will handle scrolling to top
    setIsNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        {/* Header row with grid layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* Logo - always in first column */}
          <div className="col-span-1">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
            >
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/incredible_india_logo-removebg-preview.png"
                alt="Incredible India Festival"
                className="h-12 w-auto lg:h-16"
              />
            </Link>
          </div>
          
          {/* Festival info - hidden on mobile, middle column on desktop */}
          <div className="hidden lg:block text-center">
            <h1 className="text-xl font-bold text-gray-900">
              Incredible India Festival
            </h1>
            <p className="text-sm text-gray-600">
              July 12, 2025 • Milwaukee
            </p>
          </div>
          
          {/* Mobile menu button or desktop nav - always in last column */}
          <div className="col-span-1 flex justify-end">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-1 text-gray-700"
            >
              {isNavOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => {
                    // Always prevent default for section links to handle navigation manually
                    if (item.id === "home" || item.path.startsWith("/#")) {
                      e.preventDefault();
                      handleNavigation(item);
                    } else if (item.id === "policies") {
                      handlePoliciesClick();
                    }
                  }}
                  className={`font-medium transition-colors duration-200 ${
                    (location.pathname === "/" && activeSection === item.id) || 
                    (location.pathname === "/policies" && item.id === "policies") ||
                    (location.pathname === "/sponsors" && item.id === "sponsors")
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openQRModal}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Tickets
              </motion.button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 pb-3 border-t border-gray-200"
            >
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={(e) => {
                      // Always prevent default for section links to handle navigation manually
                      if (item.id === "home" || item.path.startsWith("/#")) {
                        e.preventDefault();
                        handleNavigation(item);
                      } else if (item.id === "policies") {
                        handlePoliciesClick();
                      } else {
                        setIsNavOpen(false);
                      }
                    }}
                    className={`text-left font-medium transition-colors ${
                      (location.pathname === "/" && activeSection === item.id) || 
                      (location.pathname === "/policies" && item.id === "policies") ||
                      (location.pathname === "/sponsors" && item.id === "sponsors")
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsNavOpen(false);
                    openQRModal();
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold text-center"
                >
                  Get Tickets
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header; 