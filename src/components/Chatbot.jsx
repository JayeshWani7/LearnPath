import React, { useState } from "react";

const ExperienceChatbot = ({ setLevelOfExperience }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showRecommendation, setShowRecommendation] = useState(false);

  const questions = [
    {
      question: "How comfortable are you with foundational concepts in your field?",
      options: ["Not at all", "Somewhat comfortable", "Very comfortable"],
    },
    {
      question: "How much hands-on experience do you have in real-world projects?",
      options: ["None", "A few projects", "Multiple significant projects"],
    },
    {
      question: "How confident are you in solving intermediate to advanced challenges?",
      options: ["Not confident", "Moderately confident", "Very confident"],
    },
    {
      question: "How familiar are you with advanced tools or frameworks used in your field?",
      options: ["Not familiar", "Somewhat familiar", "Very familiar"],
    },
    {
      question: "How often do you mentor or assist others in solving complex problems?",
      options: ["Rarely", "Sometimes", "Frequently"],
    },
    {
      question: "How often do you engage in continuous learning or skill upgrades?",
      options: ["Rarely", "Occasionally", "Regularly"],
    },
  ];

  const handleOptionClick = (answer) => {
    setAnswers({ ...answers, [step]: answer });
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowRecommendation(true);
    }
  };

  const calculateLevelOfExperience = () => {
    const score = Object.values(answers).reduce((acc, answer) => {
      if (
        answer === "Not at all" ||
        answer === "None" ||
        answer === "Not confident" ||
        answer === "Not familiar" ||
        answer === "Rarely"
      )
        return acc;
      if (
        answer === "Somewhat comfortable" ||
        answer === "A few projects" ||
        answer === "Moderately confident" ||
        answer === "Somewhat familiar" ||
        answer === "Sometimes" ||
        answer === "Occasionally"
      )
        return acc + 1;
      if (
        answer === "Very comfortable" ||
        answer === "Multiple significant projects" ||
        answer === "Very confident" ||
        answer === "Very familiar" ||
        answer === "Frequently" ||
        answer === "Regularly"
      )
        return acc + 2;
      return acc;
    }, 0);

    if (score <= 4) return "Basic";
    if (score <= 8) return "Intermediate";
    return "Advanced";
  };

  const restartChat = () => {
    setStep(0);
    setAnswers({});
    setShowRecommendation(false);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-4">
      {!showRecommendation ? (
        <>
          <p className="text-lg font-medium">{questions[step].question}</p>
          <div className="space-y-2">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <p className="text-lg font-bold">
            Based on your responses, your suggested level of experience is:{" "}
            <span className="text-blue-600">{calculateLevelOfExperience()}</span>
          </p>
          <button
            onClick={() => {
              setLevelOfExperience(calculateLevelOfExperience());
              restartChat();
            }}
            className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Accept and Continue
          </button>
          <button
            onClick={restartChat}
            className="w-full p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Restart Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceChatbot;
