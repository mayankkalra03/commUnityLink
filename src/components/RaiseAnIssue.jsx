// src/components/RaiseAnIssue.jsx
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateUniqueId = () => {
  return uuidv4().substring(0, 8).toUpperCase(); // Generate 8-character unique ID
};

const RaiseAnIssue = ({ onAddIssue }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    if (!title || !description || !location || !area || !name || !contact) {
      alert("Please fill in all fields.");
      return;
    }

    const newIssue = {
      id: generateUniqueId(),
      title,
      text: description,
      user: name,
      location,
      area,
      contact,
      status: "pending",
    };

    onAddIssue(newIssue);

    setTitle("");
    setDescription("");
    setLocation("");
    setArea("");
    setName("");
    setContact("");

    toast.success("Issue raised successfully!");
  };

  return (
    <div
      className="bg-black/10 bg-cover p-8 rounded-lg shadow-lg text-white"
      style={{
        backgroundImage: `url('/src/assets/raise-issue.jpeg')`,
      }}
    >
      <h2 className="text-3xl text-center font-semibold mb-6">
        Raise a
        <span className="font-ubuntu font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          New Issue{" "}
        </span>
      </h2>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />
      <TextField
        label="Contact Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />
      <TextField
        label="Enter your Issue"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />
      <TextField
        label="Area"
        variant="outlined"
        fullWidth
        margin="normal"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FF5722",
            },
            "&:hover fieldset": {
              borderColor: "#FF5722",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF5722",
            },
          },
        }}
      />

      <Button
        variant="contained"
        color="warning"
        onClick={handleSubmit}
        style={{
          backgroundColor: "#FF5722",
          marginTop: "20px",
          width: "100%",
          fontWeight: "bold",
          fontSize: "1.1em",
        }}
      >
        Submit Issue
      </Button>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default RaiseAnIssue;
