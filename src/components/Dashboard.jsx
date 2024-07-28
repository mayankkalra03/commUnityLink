// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const OrangeTab = styled(Tab)({
  color: "#FF5722",
  "&.Mui-selected": {
    color: "#FF5722",
    backgroundColor: "#333",
  },
});

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const resolveIssue = (id) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id ? { ...issue, status: "resolved" } : issue
    );
    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
  };

  const pendingIssues = issues.filter((issue) => issue.status === "pending");
  const resolvedIssues = issues.filter((issue) => issue.status === "resolved");

  return (
    <main className="h-full text-white">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">
          Welcome,{" "}
          <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Aniket
          </span>
        </h2>
      </header>

      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">CommunityLink Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Total Issues</h4>
            <p className="text-2xl font-bold">{issues.length}</p>
          </div>
          <div className="bg-neutral-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Resolved Issues</h4>
            <p className="text-2xl font-bold">{resolvedIssues.length}</p>
          </div>
          <div className="bg-neutral-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Pending Issues</h4>
            <p className="text-2xl font-bold">{pendingIssues.length}</p>
          </div>
        </div>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        className="bg-neutral-800 rounded-lg mb-4"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FF5722",
          },
        }}
      >
        <OrangeTab label="Pending Issues" />
        <OrangeTab label="Resolved Issues" />
      </Tabs>

      <div className="bg-neutral-800 p-6 rounded-lg mt-4">
        {value === 0 && (
          <div>
            {pendingIssues.length === 0 ? (
              <p className="text-gray-400">No pending issues.</p>
            ) : (
              pendingIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-neutral-700 p-4 rounded-lg mb-4"
                >
                  <h4 className="text-lg font-semibold">{issue.title}</h4>
                  <p className="text-sm mb-2">{issue.text}</p>
                  <p className="text-xs text-gray-400">
                    Raised by: {issue.user}
                  </p>
                  <p className="text-xs text-gray-400">
                    Address: {issue.location}
                  </p>
                  <p className="text-xs text-gray-400">Area: {issue.area}</p>
                  <p className="text-xs text-gray-400">Ticket ID: {issue.id}</p>
                  <br />
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => resolveIssue(issue.id)}
                  >
                    Mark as Resolved
                  </Button>
                </div>
              ))
            )}
          </div>
        )}

        {value === 1 && (
          <div>
            {resolvedIssues.length === 0 ? (
              <p className="text-gray-400">No resolved issues.</p>
            ) : (
              resolvedIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-neutral-700 p-4 rounded-lg mb-4"
                >
                  <h4 className="text-lg font-semibold">{issue.title}</h4>
                  <p className="text-sm mb-2">{issue.text}</p>
                  <p className="text-xs text-gray-400">
                    Raised by: {issue.user}
                  </p>
                  <p className="text-xs text-gray-400">
                    Address: {issue.location}
                  </p>
                  <p className="text-xs text-gray-400">Area: {issue.area}</p>
                  <p className="text-xs text-gray-400">Ticket ID: {issue.id}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
