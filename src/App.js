import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import LearningPathGenerator from "./components/LearningPathGenerator";



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthChange = (authStatus, userInfo) => {
    setIsAuthenticated(authStatus);
    setUser(userInfo);
  };
  return (
    <div className="App">
      <Navbar onAuthChange={handleAuthChange} />
      <main>
        <Home />
        <About />
        <section id="learning-path-generator" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2
              id="contact"
              className="text-3xl font-bold text-center mb-8 text-blue-600"
            >
              Build Your Personalized Learning Path
            </h2>
            <LearningPathGenerator isAuthenticated={isAuthenticated} user={user} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
