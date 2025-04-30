
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">MediBill Solutions</h4>
          <p>Your trusted partner for medical billing services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-secondary">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p>Email: info@medibillsolutions.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-secondary">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} MediBill Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

    