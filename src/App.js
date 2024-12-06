import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import LearningPathGenerator from "./components/LearningPathGenerator";
import ExperienceChatbot from "./components/Chatbot";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthChange = (authStatus, userInfo) => {
    setIsAuthenticated(authStatus);
    setUser(userInfo);
  };

  const [levelOfExperience, setLevelOfExperience] = useState("");

  return (
    <div className="App">
      <Navbar onAuthChange={handleAuthChange} />
      <main>
        <Home />
        
        <section id="learning-path-generator" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2
              id="contact"
              className="text-3xl font-bold text-center mb-8 text-blue-600"
            >
              Build Your Personalized Learning Path
            </h2>
            <div className="container mx-auto p-6">
              <h1 className="text-2xl font-bold mb-4">Experience Level Determination</h1>
              {levelOfExperience ? (
                <p className="text-lg">Your level of experience for targeted role is: {levelOfExperience}</p>
              ) : (
                <ExperienceChatbot setLevelOfExperience={setLevelOfExperience} />
              )}
            </div>
            <LearningPathGenerator isAuthenticated={isAuthenticated} user={user} initialExperience={levelOfExperience} />
          </div>
        </section>
        <About />
      </main>
    </div>
  );
}

export default App;
