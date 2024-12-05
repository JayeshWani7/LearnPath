import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useFetchLearningPath = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const fetchLearningPath = async ({ levelOfExperience, targetRole }) => {
    setLoading(true);
    setError(null);

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {
                text: `You are a Career Counsellor. Suggest a person a learning path in JSON format with the following structure:
                {
                  "learningPath": [
                    {
                      "title": "Phase Title",
                      "duration": "Duration",
                      "resources": ["Resource1", "Resource2"],
                      "description": "Phase Description"
                    }
                  ]
                } 
                The learning path should help someone aiming for ${targetRole} with ${levelOfExperience} level of experience.`,
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage("");
      const responseText = await result.response.text();
      const learningPathData = JSON.parse(responseText);

      if (learningPathData && learningPathData.learningPath) {
        return learningPathData.learningPath;
      } else {
        throw new Error("Invalid response structure from the API");
      }
    } catch (err) {
      console.error("Error fetching learning path:", err);
      setError("Failed to generate learning path. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchLearningPath, loading, error };
};

export default useFetchLearningPath;
