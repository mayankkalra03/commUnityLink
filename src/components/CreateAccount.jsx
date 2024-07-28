import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import createAccountImage from "../assets/signin-image.jpg";

const CreateAccountPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Account created:", {
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url(${createAccountImage})` }}
      >
        <div className="text-center p-10">
          <h2 className="text-4xl font-bold text-white">Join Us!</h2>
          <p className="mt-4 text-lg text-white">
            Create an account to start engaging with your community.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 bg-black/10 rounded-r-lg justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              type="submit"
              variant="contained"
              color="warning"
              fullWidth
              style={{
                backgroundColor: "#FF5722",
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "1.1em",
              }}
            >
              Create Account
            </Button>
          </form>
          <div className="text-white mt-4 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="hover:text-orange-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
