import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

function Header({ tabs, activeTab, onTabClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fff] px-4 md:px-10 py-4 md:py-6 z-50 text-white shadow-md">
      
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
        
        {/* Logo - Left */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">&lt;/&gt;</span> */}
          <span
  style={{
    background: "linear-gradient(90deg, #4f46e5, #06b6d4)", // Indigo to cyan
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold"
  }}
>
  Sasi Kumar
</span>

        </div>

        {/* Tabs - Center */}
        <nav>
  <ul className="flex gap-10 text-sm font-bold">
    {tabs.map((tab) => (
      <li key={tab.id} className="relative group">
      <button
          className={`transition-colors ${
            activeTab === tab.id ? 'text-blue-500' : 'text-black hover:text-blue-400'
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </button>
        {activeTab === tab.id && (
          <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded"></span>
        )}
      </li>
    ))}
  </ul>
</nav>


        {/* Social Icons - Right */}
        <div className="flex gap-3">
          {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-gray-100 text-black rounded-full p-2 w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
        
            <span
  style={{
    background: "linear-gradient(90deg, #4f46e5, #06b6d4)", // Indigo to cyan
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold"
  }}
>
  Sasi Kumar
</span>
          </div>

          {/* Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <nav className="mt-4">
              <ul className="flex flex-col gap-3  font-bold items-start text-black">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`transition-colors ${
                        activeTab === tab.id ? 'text-black' : 'text-blue hover:text-white'
                      }`}
                      onClick={() => {
                        onTabClick(tab.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Social Icons */}
            <div className="flex gap-3 mt-4">
              {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-100 text-black rounded-full p-2 w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
