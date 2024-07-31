import React, { useState } from "react";
import aboutBgImage from "/assets/about-image.jpg"; // Replace with your background image
import teamMember1 from "/assets/profile-pictures/parul.jpg"; // Replace with your team member images
import teamMember2 from "/assets/profile-pictures/vishesh.jpg"; // Replace with your team member images
import teamMember3 from "/assets/profile-pictures/nishant.jpg"; // Replace with your team member images
import teamMember4 from "/assets/profile-pictures/sahil.jpg"; // Replace with your team member images
import teamMember5 from "/assets/profile-pictures/mayank.png"; // Replace with your team member images
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutUs = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Perform your subscribe action here (e.g., API call)
    toast.success("Subscribed successfully!");
    setEmail(""); // Reset the email input
  };

  return (
    <div className="text-white">
      {/* Header Section */}
      <header
        className="relative h-72 bg-cover bg-center flex items-center justify-center rounded-t-lg"
        style={{ backgroundImage: `url(${aboutBgImage})` }}
      >
        <h1 className="relative text-3xl sm:text-5xl font-bold text-center text-white px-4">
          About{" "}
          <span className=" font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            CommUnityLink
          </span>
        </h1>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-8 bg-black/10">
        <div className="text-center mb-6">
          <p className="text-lg text-neutral-300 mx-auto">
            CommUnityLink is dedicated to enhancing community engagement and
            local governance. <br /> Our platform enables residents to report
            issues, participate in local decisions, and stay informed about
            their neighborhood.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-black/10 py-8 px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Our{" "}
            <span className=" font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Mission
            </span>
          </h2>
          <div className="relative mx-auto p-6 rounded-lg  border-2 border-amber-500">
            <p className="text-lg text-justify text-neutral-300 mb-2">
              At CommUnityLink, our mission is to bridge the gap between
              residents and local authorities by fostering a more transparent,
              engaged, and collaborative community. We are committed to
              empowering citizens by providing a platform where they can
              actively participate in local governance, report issues, and track
              progress.
            </p>
            <p className="text-lg text-justify text-neutral-300">
              We believe in creating a space where every voice is heard and
              valued. Our tools and features are designed to facilitate
              effective communication, encourage civic participation, and
              promote collective problem-solving. By strengthening community
              ties and improving local services, we aim to build safer, more
              vibrant neighborhoods for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-black/10 py-12 px-4 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Our{" "}
            <span className=" text-3xl font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Impact
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Since our launch, we’ve resolved hundreds of issues, organized
            numerous events, and empowered residents to have a say in local
            governance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-white">
              Issues Resolved
            </h3>
            <p className="text-4xl font-bold text-orange-500 mt-2">350+</p>
          </div>
          <div className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-white">
              Events Organized
            </h3>
            <p className="text-4xl font-bold text-orange-500 mt-2">25+</p>
          </div>
          <div className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-white">
              Residents Engaged
            </h3>
            <p className="text-4xl font-bold text-orange-500 mt-2">1,000+</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8 px-4 sm:px-8 bg-black/10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Meet the{" "}
          <span className=" font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Team
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-neutral-800 rounded-lg shadow-lg p-4 text-center">
              <img
                src={teamMember1}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Parul Mehra</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-neutral-800 rounded-lg shadow-lg p-4 text-center">
              <img
                src={teamMember2}
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Vishesh Bareja</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-neutral-800 rounded-lg shadow-lg p-4 text-center">
              <img
                src={teamMember3}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Nishant Chaturvedi</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-neutral-800 rounded-lg shadow-lg p-4 text-center">
              <img
                src={teamMember4}
                alt="Team Member 4"
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Sahil Shukla</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-neutral-800 rounded-lg shadow-lg p-4 text-center">
              <img
                src={teamMember5}
                alt="Team Member 5"
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Mayank Kalra</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Newsletter */}
      <section className="py-12 px-4 sm:px-8 text-center bg-black/10 rounded-b-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Subscribe to our{" "}
          <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Newsletter
          </span>
        </h2>
        <p className="text-lg text-neutral-300 mb-4">
          Stay updated with the latest news and updates from our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-3 px-4 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none w-full sm:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-gradient-to-r from-orange-500 to-red-800 text-white py-3 px-8 rounded-md shadow-lg hover:from-orange-600 hover:to-red-900 transition-colors duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default AboutUs;
