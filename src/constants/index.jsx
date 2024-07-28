import {
  FaMapPin,
  FaUsers,
  FaComments,
  FaThumbsUp,
  FaEye,
  FaCog,
} from "react-icons/fa";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Raise an issue", href: "/issue" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Discussions", href: "/discussions" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export const communityStories = [
  {
    user: "Amit Sharma",
    community: "Shanti Vihar",
    image: user1,
    text: "CommUnityLink helped us report and fix a water leakage issue that had been affecting our neighborhood for months. It's a game-changer for community engagement!",
  },
  {
    user: "Priya Gupta",
    community: "Krishna Nagar",
    image: user2,
    text: "CommUnityLink enabled our community to voice our concerns about traffic safety near the local school. We now have new speed bumps and crossing guards.",
  },
  {
    user: "Rohit Kumar",
    community: "Ganga Vihar",
    image: user3,
    text: "Thanks to CommUnityLink, we organized a successful community clean-up event. Our town looks cleaner and more vibrant than ever.",
  },
  {
    user: "Ankur Patel",
    community: "Laxmi Nagar",
    image: user4,
    text: "Our community used CommUnityLink to address the lack of street lighting in certain areas. We now have well-lit streets that make our neighborhood safer.",
  },
  {
    user: "Vikram Singh",
    community: "Rajendra Park",
    image: user5,
    text: "CommUnityLink helped us launch a neighborhood watch program. We feel more secure knowing we're all looking out for each other.",
  },
  {
    user: "Neha Mehta",
    community: "Ashok Nagar",
    image: user6,
    text: "With CommUnityLink, we addressed noise pollution from a nearby construction site. Our community is much quieter and more peaceful now.",
  },
];

export const features = [
  {
    icon: <FaMapPin />,
    text: "Neighborhood Issue Reporting",
    description:
      "Easily report and document local issues with detailed descriptions and images to inform community leaders.",
  },
  {
    icon: <FaUsers />,
    text: "Community Engagement",
    description:
      "Engage with your community through discussions, polls, and feedback systems to voice your opinions and ideas.",
  },
  {
    icon: <FaComments />,
    text: "Real-Time Communication",
    description:
      "Communicate directly with local government officials and community members for timely updates and responses.",
  },
  {
    icon: <FaThumbsUp />,
    text: "Progress Tracking",
    description:
      "Monitor the status of your reported issues and stay informed about the progress and resolutions in real-time.",
  },
  {
    icon: <FaEye />,
    text: "Transparent Decision-Making",
    description:
      "Access transparent records of community decisions and actions, ensuring accountability and trust.",
  },
  {
    icon: <FaCog />,
    text: "Customizable Notifications",
    description:
      "Receive personalized notifications and updates based on your preferences and areas of interest within your community.",
  },
];
