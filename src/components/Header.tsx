import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  BookOpen,
  Scale,
  Users,
  HelpCircle,
  Mail,
  Home,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", icon: Home, to: "/" },
    { name: "Resources", icon: Database, to: "/resources" },
    { name: "About Us", icon: Users, to: "/about" },
    { name: "Opportunities", icon: BookOpen, to: "/opportunities" },
    { name: "Quizzes", icon: HelpCircle, to: "/quizzes" },
    { name: "Contact Us", icon: Mail, to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          : "bg-black/40 backdrop-blur-md border-b border-cyan-500/10"
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className=" "></div>
              {/* <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Scale className="h-8 w-8 text-white" />
              </div> */}
              <div className="  rounded-xl">
  <img
    src="/Logo.png"
    alt="My Logo"
    className="h-[102px] w-[110px] object-contain ml-[-15px] transition-transform duration-300 hover:scale-110 hover:-translate-x-y-2"
  />
</div>



            </div>
            <div>
              <h1 className="ml-[-25px] text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                LEXNEX
              </h1>
              <p className="ml-[-25px] text-xs text-cyan-300/80 font-medium tracking-wider ">
                NEXT-GEN LEGAL EDUCATION
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                className="group relative px-6 py-3 rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-xl transition-all duration-300"></div>
                <div className="relative flex items-center space-x-2 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl"></div>
            {isMenuOpen ? (
              <X className="h-6 w-6 relative z-10" />
            ) : (
              <Menu className="h-6 w-6 relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl mx-4 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
            <nav className="relative px-6 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 py-3 px-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
