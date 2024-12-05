import React, { useState } from "react";
import useFetchLearningPath from "../hooks/useFetchLearningPath";

const LearningPathGenerator = () => {
  const [formData, setFormData] = useState({ targetRole: "", levelOfExperience: "Basic" });
  const [learningPath, setLearningPath] = useState([]);
  const { fetchLearningPath, loading, error } = useFetchLearningPath();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generatedPath = await fetchLearningPath(formData);
    if (generatedPath) {
      setLearningPath(generatedPath);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        {/* Target Role Input */}
        <input
          type="text"
          name="targetRole"
          value={formData.targetRole}
          onChange={handleInputChange}
          placeholder="Enter your Target Role"
          className="w-full p-2 border rounded"
          required
        />

        {/* Level of Experience Dropdown */}
        <select
          name="levelOfExperience"
          value={formData.levelOfExperience}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        {/* Submit Button */}
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
            No learning path generated yet. Submit the form to generate one.
          </div>
        )
      ) : (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Learning Path
          </h1>
          {learningPath.map((phase, index) => (
            <div key={index} className="mb-8 p-6 border rounded-lg bg-white shadow hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{phase.title}</h2>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Duration:</span> {phase.duration}
              </p>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Resources:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {phase.resources.map((resource, idx) => (
                  <li key={idx} className="text-gray-600">{resource}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningPathGenerator;
