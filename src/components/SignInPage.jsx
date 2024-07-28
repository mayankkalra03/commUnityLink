// src/components/SignInPage.jsx
import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import signinImage from "/assets/signin-image.jpg"; // Add an appropriate image in your assets folder

const SignInPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side with image */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url(${signinImage})` }}
      >
        <div className="text-center p-10">
          <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
          <p className="mt-4 text-lg text-white">
            Sign in to continue and engage with your community.
          </p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 bg-black/10 rounded-r-lg justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
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
              fullWidth
              style={{
                backgroundColor: "#FF5722",
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "1.1em",
              }}
            >
              Sign In
            </Button>
          </form>
          <div className="text-white mt-4 text-center">
            <Link to="/forgot-password" className="hover:text-orange-500">
              Forgot Password?
            </Link>
          </div>
          <div className="text-white mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:text-orange-500">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
