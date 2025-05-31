import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer({ tabs, activeTab, onTabClick }) {
  return (
    <footer className="bg-[#0A0F1C] px-4 py-6 text-white border-t border-gray-700">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        
        {/* Left - copyright */}
        <p className="text-xs text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Sasi.dev. All rights reserved.
        </p>

        {/* Center - nav tabs (horizontal even on mobile) */}
        <nav className="w-full">
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            {tabs.map(tab => (
              <li key={tab.id} className="relative group">
                <button
                  className={`transition-colors ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.label}
                </button>
                {activeTab === tab.id && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right - social icons */}
        <div className="flex justify-center gap-4">
          {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-gray-100 text-black rounded-full p-2 w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
