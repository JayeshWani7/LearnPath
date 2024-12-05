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
    responseMimeType: "text/plain",
  };

  const fetchLearningPath = async ({ skills, targetRole }) => {
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
                text: `generate a learning path for student who has knowledge of ${skills} and is targeting for the role of ${targetRole}`,
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage("");
      const responseText = await result.response.text();
      console.log("Response text:", responseText);
      // Parse response into structured format
      const learningPath = responseText
        .split("\n\n") // Split by double newlines to separate sections
        .filter((section) => section.trim() !== "") // Remove empty sections
        .map((section, index) => {
          // Break section into lines
          const lines = section.split("\n").map((line) => line.trim());
          
          // Extract the main heading
          const mainHeading = lines.find((line) => line.startsWith("#"));
          
          // Extract subheadings
          const subHeadings = lines
            .filter((line) => line.startsWith("**") && line.endsWith("**"))
            .map((line) => line.slice(2, -2).trim()); // Remove '**' markers
          
          // Extract plain text
          const bodyText = lines.filter(
            (line) =>
              !line.startsWith("#") &&
              !(line.startsWith("**") && line.endsWith("**"))
          );

          return {
            title: `Step ${index + 1}: ${mainHeading ? mainHeading.slice(1).trim() : "No Title"}`, // Remove '#' and trim
            subHeadings: subHeadings, // Array of subheadings
            description: bodyText.join(" "), // Combine plain text into a single description
          };
        });

      return learningPath;
      
    } catch (err) {
      console.error("Error fetching learning path:", err);
      setError("Failed to generate learning path. Please try again.");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  

  return { fetchLearningPath, loading, error };
};

export default useFetchLearningPath;
