import React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful submission
    toast.success("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black/10 text-white rounded-xl">
      {/* Hero Section */}
      <header
        className="relative h-96 bg-cover bg-center flex items-center justify-center rounded-t-lg"
        style={{
          backgroundImage: `url('/src/assets/contact.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black rounded-t-lg bg-opacity-30"></div>
        <h1 className="relative text-4xl sm:text-6xl font-bold text-center text-white px-4">
          Get in{" "}
          <span className="font-ubuntu font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Touch
          </span>
        </h1>
      </header>
      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Contact{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Information
            </span>{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Address</h3>
              <p className="text-lg">
                3, Near Rithala Metro Station Rohini Sector 5, Institutional
                Area, New Delhi, Delhi 110085
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Email</h3>
              <p className="text-lg">query@community.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p className="text-lg">+91-9348394839</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <p className="text-lg">Mon - Fri: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Send Us a{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Message
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-700 text-white p-3 rounded-md border border-neutral-600"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-700 text-white p-3 rounded-md border border-neutral-600"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-neutral-700 text-white p-3 rounded-md border border-neutral-600"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-800 text-white py-3 px-6 rounded-md shadow-lg hover:from-orange-600 hover:to-red-900 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>

      {/* Optional: Map Integration */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Location
            </span>
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.019498680311!2d77.10624777392293!3d28.71896328015336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01e3c202a307%3A0x996d6a030689923!2sJIMS%20COLLEGE!5e0!3m2!1sen!2sin!4v1722104696841!5m2!1sen!2sin"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 px-4 sm:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Our{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Socials
            </span>
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-white hover:text-orange-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-4xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-orange-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-4xl" />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-orange-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-orange-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-4xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
