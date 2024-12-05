import React, { useState } from "react";
import useFetchLearningPath from "../hooks/useFetchLearningPath";

const LearningPathGenerator = () => {
  const [formData, setFormData] = useState({ skills: "", targetRole: "" });
  const [learningPath, setLearningPath] = useState([]);
  const { fetchLearningPath, loading, error } = useFetchLearningPath();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generatedPath = await fetchLearningPath(formData);
    setLearningPath(generatedPath || []); // Update the learning path state
  };

  return (
    <div className="w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Generate Your Personalized Learning Path
      </h2>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          placeholder="Enter your skills"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="targetRole"
          value={formData.targetRole}
          onChange={handleInputChange}
          placeholder="Enter your target role"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Learning Path"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* Learning Path Display */}
      {learningPath.length === 0 ? (
        !loading && (
          <div className="text-center text-gray-600 mt-10">
            No learning path generated yet. Please submit your skills and target role.
          </div>
        )
      ) : (
        <ul className="space-y-4">
          {learningPath.map((step, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <span className="inline-block bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </span>
                <div>
                  {/* Main Heading */}
                  <h3 className="text-lg font-medium text-gray-800">{step.title}</h3>
                  
                  {/* Subheadings */}
                  {step.subHeadings.length > 0 && (
                    <ul className="mt-2 pl-6 list-disc text-gray-700">
                      {step.subHeadings.map((subHeading, subIndex) => (
                        <li key={subIndex} className="text-sm font-semibold">
                          {subHeading}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      )}
    </div>
  );
};

export default LearningPathGenerator;