import React, { useState, useEffect } from "react";
import useFetchLearningPath from "../hooks/useFetchLearningPath";

const LearningPathGenerator = ({ isAuthenticated, user, initialExperience }) => {
  const [formData, setFormData] = useState({
    targetRole: "",
    levelOfExperience: initialExperience || "Basic",
  });
  const [learningPath, setLearningPath] = useState([]);
  const { fetchLearningPath, loading, error } = useFetchLearningPath();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("Please log in to generate a learning path.");
      return;
    }

    const generatedPath = await fetchLearningPath(formData);
    if (generatedPath) {
      setLearningPath(generatedPath);
    }
  };

  useEffect(() => {
    // Update the formData when the initialExperience prop changes
    setFormData((prev) => ({
      ...prev,
      levelOfExperience: initialExperience || "Basic",
    }));
  }, [initialExperience]);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <label htmlFor="targetRole" className="block text-gray-700 font-medium">
          Target Role
        </label>
        <input
          type="text"
          id="targetRole"
          name="targetRole"
          value={formData.targetRole}
          onChange={handleInputChange}
          placeholder="Enter your Target Role"
          className="w-full p-2 border rounded"
          required
        />

        <label htmlFor="levelOfExperience" className="block text-gray-700 font-medium">
          Level of Experience
        </label>
        <select
          id="levelOfExperience"
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

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Learning Path"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {learningPath.length > 0 && (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learning Path</h1>
          {learningPath.map((phase, index) => (
            <div
              key={index}
              className="mb-8 p-6 border rounded-lg bg-white shadow hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{phase.title}</h2>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Duration:</span> {phase.duration}
              </p>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Resources:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {phase.resources.map((resource, idx) => (
                  <li key={idx} className="text-gray-600">
                    {resource}
                  </li>
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
