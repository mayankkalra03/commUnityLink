import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const discussionsData = [
  {
    id: 1,
    title: "Road Maintenance in Downtown",
    content:
      "Discuss the current state of road maintenance in the downtown area...",
    comments: [
      {
        id: 1,
        user: "John Doe",
        comment: "I think it needs immediate attention.",
      },
      {
        id: 2,
        user: "Jane Smith",
        comment: "Agree, the potholes are dangerous.",
      },
    ],
  },
  {
    id: 2,
    title: "Park Renovation Plans",
    content: "Share your thoughts on the upcoming park renovation...",
    comments: [
      { id: 1, user: "Alex Johnson", comment: "Looking forward to it!" },
    ],
  },
];

const initialPollsData = [
  {
    id: 1,
    question: "Should we allocate more budget to park maintenance?",
    options: ["Yes", "No", "Maybe"],
    votes: { Yes: 10, No: 2, Maybe: 3 },
  },
  {
    id: 2,
    question: "Do you support the new recycling program?",
    options: ["Yes", "No"],
    votes: { Yes: 15, No: 1 },
  },
];

const Discussions = () => {
  const [discussions] = useState(discussionsData);
  const [polls, setPolls] = useState(() => {
    const savedPolls = localStorage.getItem("polls");
    return savedPolls ? JSON.parse(savedPolls) : initialPollsData;
  });
  const [newPoll, setNewPoll] = useState({ question: "", options: ["", ""] });
  const [showCreatePoll, setShowCreatePoll] = useState(false);

  useEffect(() => {
    localStorage.setItem("polls", JSON.stringify(polls));
  }, [polls]);

  const handleVote = (pollId, option) => {
    const updatedPolls = polls.map((poll) =>
      poll.id === pollId
        ? {
            ...poll,
            votes: { ...poll.votes, [option]: poll.votes[option] + 1 },
          }
        : poll
    );
    setPolls(updatedPolls);
  };

  const handleNewPollChange = (index, value) => {
    const updatedOptions = newPoll.options.map((option, i) =>
      i === index ? value : option
    );
    setNewPoll({ ...newPoll, options: updatedOptions });
  };

  const addNewPollOption = () => {
    setNewPoll({ ...newPoll, options: [...newPoll.options, ""] });
  };

  const createPoll = () => {
    setPolls([
      ...polls,
      {
        ...newPoll,
        id: polls.length + 1,
        votes: newPoll.options.reduce(
          (acc, option) => ({ ...acc, [option]: 0 }),
          {}
        ),
      },
    ]);
    setNewPoll({ question: "", options: ["", ""] });
    setShowCreatePoll(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Community{" "}
        <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Discussions
        </span>
      </h1>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Discussions</h2>
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-gray-800/50 p-6 mb-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
            <p className="text-gray-300 mb-4">{discussion.content}</p>
            <div className="space-y-2">
              {discussion.comments.map((comment) => (
                <p key={comment.id} className="text-sm text-gray-400">
                  <strong>{comment.user}:</strong> {comment.comment}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Polls</h2>
        {polls.map((poll) => (
          <div
            key={poll.id}
            className="bg-gray-800/50 p-6 mb-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{poll.question}</h3>
            {poll.options.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`${poll.id}-${option}`}
                  name={`poll-${poll.id}`}
                  onChange={() => handleVote(poll.id, option)}
                  className="mr-2"
                />
                <label
                  htmlFor={`${poll.id}-${option}`}
                  className="text-gray-300"
                >
                  {option} ({poll.votes[option]})
                </label>
              </div>
            ))}
          </div>
        ))}
        {!showCreatePoll && (
          <Button
            onClick={() => setShowCreatePoll(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 rounded-md text-white w-full"
          >
            Create Poll
          </Button>
        )}
        {showCreatePoll && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Create a New Poll</h3>
              <button
                onClick={() => setShowCreatePoll(false)}
                className="text-gray-300 hover:text-red-500"
              >
                X
              </button>
            </div>
            <Input
              value={newPoll.question}
              onChange={(e) =>
                setNewPoll({ ...newPoll, question: e.target.value })
              }
              placeholder="Poll Question"
            />
            {newPoll.options.map((option, index) => (
              <Input
                key={index}
                value={option}
                onChange={(e) => handleNewPollChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
            <Button onClick={addNewPollOption} className="mt-2 w-full">
              Add Option
            </Button>
            <Button
              onClick={createPoll}
              className="bg-gradient-to-r from-orange-500 to-orange-800 w-full rounded-md text-white"
            >
              Create Poll
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discussions;
