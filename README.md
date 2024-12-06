What Is LearnPath?
LearnPath is an AI-powered tool designed to personalize learning journeys for individuals seeking to upskill in their desired fields. It leverages advanced AI technology, particularly Google’s Gemini LLM, to curate a learning experience that’s tailored to your specific needs and aspirations.

Problem Statement:
Users often face the challenge of keeping their skills up-to-date and relevant to the demands of their career goals. Traditional learning platforms, which provide static and generalized course recommendations, often fail to offer personalized guidance tailored to an individual’s unique needs, skills, and career aspirations. Learners often struggle with Irrelevant Content and, lack of Clear Direction.

Target Audience
It is useful for the students, working professionals and individuals who want to look out for the resources to upskill them. LearnPath ensures that you get exactly what you need, in the right order, and at your own pace.

Solution
It helps users achieve their goals efficiently and effectively by generating a Personalized Learning Path — The learning path is based on users skills, interests, and career aspirations.LearnPath ensures that you get exactly what you need, in the right order, and at your own pace. Whether you’re just starting out or aiming for an advanced role, LearnPath adapts to your needs, helping you achieve your goals faster and more effectively.

Features
⁠Personalized Learning Paths
- Generate tailored learning paths by specifying the Target Role and Level of Experience.
- The generated paths include phases with detailed descriptions, durations, and recommended resources.
Firebase Authentication
- Users must sign in with Google to generate learning paths.
- Secure authentication using the @react-oauth/google package.
- Users can log out with a single click.
Chatbot Integration
- Pre-select the appropriate Level of Experience in the form when navigating to the LearningPathGenerator component.
- Updates seamlessly if the user restarts the chatbot and receives a new experience level.
Responsive Design
- Fully responsive layout for an optimal experience on all devices.
- Interactive components like dropdown menus and hover effects enhance usability
Error Handling
- Alerts users if they attempt to generate a learning path without signing in.
- Displays meaningful error messages when an issue occurs during path generation.
Optimized User Experience
- Real-time loading states during path generation.
- Clear feedback for missing or incomplete inputs.
DESIGN
The architecture of LearnPath is designed to deliver personalized learning journeys with the aid of cutting-edge AI technology. It enables seamless tracking, AI-based course recommendations, and a user-friendly interface to ensure that each learner’s path is optimized for their specific goals.

User-Centered Design: The user interface is built to be intuitive, ensuring that users with varying technical backgrounds can easily navigate through the learning path and track their progress.


Personalization: The core feature of LearnPath is personalized learning. Using AI to analyze a user’s skills, career goals, and preferences ensures the recommendations are highly relevant, which leads to better learning outcomes.


Scalability: Cloud-based infrastructure ensures the platform can handle varying amounts of traffic as the user base grows.


⁠Frontend

The UI is built with React for a seamless, responsive experience across all devices.

Backend Framework

Node.js powers the server-side logic, enabling efficient real-time data processing.

Styling Framework

Tailwind CSS provides a utility-first design approach for rapid and consistent styling.

Authentication & Database

Firebase Authentication handles secure logins, while Firestore manages scalable user data and progress.

AI-Powered Recommendation Engine

AI Model: Powered by Google’s gemini-1.5-flash which suggests relevant courses, resources, and tools based on user preferences, skills, and career aspirations.
Cloud Infrastructure & Hosting

Cloud Platform: Google Cloud is used to host the backend services and data.
FLOWCHART

Step By Step Guide
Clone the Repository
git clone <repository-url> cd LearnPath-Generator

Install Dependencies
npm install

Set Up Firebase

Go to Firebase Console.
Create a project and enable Authentication and Firestore Database.
Obtain your Firebase config details from the Firebase project settings.
Add a .env file in the root of your project and include the Firebase configuration:
env
REACT_APP_FIREBASE_API_KEY=<your-api-key> REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain> REACT_APP_FIREBASE_PROJECT_ID=<your-project-id> REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket> REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id> REACT_APP_FIREBASE_APP_ID=<your-app-id>

Start the Development Server

npm start
Usage

Sign up or log in through Firebase Authentication.
Generate your personalized learning path.
GITHUB REPOSITORY : https://github.com/JayeshWani7/LearnPath

DEPLOYMENT

The LearnPath Generator application is deployed on Google Cloud Run using a GitHub repository. Here’s a quick overview of the setup:

Create Project: Set up a Google Cloud project and enable Cloud Run, Cloud Build, and Artifact Registry APIs.

Link GitHub Repo: In Cloud Build > Triggers, connect the GitHub repository and select the branch (e.g., main) for deployment.

Build Configuration: Use Google Cloud Buildpacks for runtime detection. Set the build context directory to /src.

Environment Variables: Add Firebase environment variables (API_KEY, AUTH_DOMAIN, etc.) in the deployment settings.

Deploy: Configure Cloud Run to deploy from the GitHub trigger, choose a region, and set authentication preferences.

Continuous Deployment: Push changes to the main branch to automatically build and deploy the latest version.

The project is deployed at https://learnpath-195433235342.us-central1.run.app

RESULT

The output displays a well-structured, step-by-step learning path for web development. Each phase highlights a specific skill level (e.g., Fundamentals, Intermediate) with associated durations and curated resources, offering a guided roadmap for learners to progress efficiently.

CONCLUSION
This project combines AI, Firebase, and Google Cloud to deliver personalized learning experiences, showcasing the power of technology in education.

CO-AUTHORED BY: JAYESH WANI & ANAM AQUIL
