
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-300",
        isScrolled ? "bg-secondary shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          MediBill Solutions
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary py-2 px-4">
          <Link href="/" className="block py-2 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-primary">
            About
          </Link>
          <Link href="/blog" className="block py-2 hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="block py-2 hover:text-primary">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

    