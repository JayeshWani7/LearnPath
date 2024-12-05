import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About LearnPath
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          LearnPath is an AI-powered tool designed to personalize learning
          journeys for individuals seeking to upskill in their desired fields.
          Using the latest advancements in AI technology, we create tailored
          roadmaps to help users achieve their goals efficiently and
          effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Personalized Learning Paths
            </h3>
            <p className="text-gray-600">
              LearnPath generates tailored learning journeys based on your
              unique skills, interests, and career aspirations, ensuring
              relevance and impact.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              AI-Powered Recommendations
            </h3>
            <p className="text-gray-600">
              Harnessing the power of Google's Gemini AI, LearnPath offers
              cutting-edge recommendations for courses, tools, and resources.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Track your progress with our intuitive dashboards and achieve
              milestones with actionable insights and guidance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              User-Friendly Interface
            </h3>
            <p className="text-gray-600">
              Navigate with ease and enjoy a seamless experience with our
              responsive and accessible design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
