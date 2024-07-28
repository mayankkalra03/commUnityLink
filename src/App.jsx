// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import RaiseAnIssue from "./components/RaiseAnIssue";
import SignInPage from "./components/SignInPage";
import { useEffect, useState } from "react";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  const handleAddIssue = (newIssue) => {
    const updatedIssues = [...issues, newIssue];
    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
  };

  const handleResolveIssue = (id) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id ? { ...issue, status: "resolved" } : issue
    );
    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
  };

  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard issues={issues} onResolveIssue={handleResolveIssue} />
            }
          />
          <Route
            path="/issue"
            element={<RaiseAnIssue onAddIssue={handleAddIssue} />}
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<CreateAccount />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
