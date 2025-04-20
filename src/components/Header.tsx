
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 z-40 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-gradient">TPF AI</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#program" className="text-gray-700 hover:text-tpf-purple transition-colors">Program</a>
          <a href="#curriculum" className="text-gray-700 hover:text-tpf-purple transition-colors">Curriculum</a>
          <a href="#speakers" className="text-gray-700 hover:text-tpf-purple transition-colors">Speakers</a>
          <a href="#journey" className="text-gray-700 hover:text-tpf-purple transition-colors">Journey</a>
          <a href="#community" className="text-gray-700 hover:text-tpf-purple transition-colors">Community</a>
          <a href="#faq" className="text-gray-700 hover:text-tpf-purple transition-colors">FAQ</a>
          <a
            href="#waitlist"
            className="ml-4 px-6 py-2 bg-ai-gradient text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <a href="#program" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>Program</a>
          <a href="#curriculum" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>Curriculum</a>
          <a href="#speakers" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>Speakers</a>
          <a href="#journey" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>Journey</a>
          <a href="#community" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>Community</a>
          <a href="#faq" className="text-gray-700 hover:text-tpf-purple py-2 transition-colors" onClick={toggleMobileMenu}>FAQ</a>
          <a
            href="#waitlist"
            className="w-full text-center px-6 py-2 bg-ai-gradient text-white rounded-md hover:opacity-90 transition-opacity"
            onClick={toggleMobileMenu}
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
