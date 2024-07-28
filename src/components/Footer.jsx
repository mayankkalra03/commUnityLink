import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about-us"
                  className="text-neutral-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-300 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-white"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#guides" className="text-neutral-300 hover:text-white">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#blog" className="text-neutral-300 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-neutral-300 hover:text-white"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-neutral-300 hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-neutral-300 hover:text-white"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-neutral-300 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-neutral-300 hover:text-white"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="/signin" className="text-neutral-300 hover:text-white">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/signup" className="text-neutral-300 hover:text-white">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#events" className="text-neutral-300 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#success-stories"
                  className="text-neutral-300 hover:text-white"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#social-media"
                  className="text-neutral-300 hover:text-white"
                >
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CommUnityLink. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
