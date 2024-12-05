import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-shadow-lg">
            Welcome to <span className="text-yellow-400">LearnPath</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto md:mx-0">
            Your personalized AI-powered learning navigator. Discover the skills
            you need, tailored to your goals, and unlock your potential.
          </p>

          <div className="mt-6">
            <button className="px-8 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-lg text-lg hover:bg-yellow-500 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="AI Learning Path Illustration"
            className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
