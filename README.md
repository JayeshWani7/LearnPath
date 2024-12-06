# LearnPath Generator

LearnPath Generator is a dynamic web application that creates personalized learning paths based on user input and preferences. It integrates Google Authentication for seamless user management and ensures a responsive and intuitive experience. The application adapts based on chatbot interactions, enhancing user engagement.

---

## Features

### 1. **Personalized Learning Paths**
   - Generate tailored learning paths by specifying the `Target Role` and `Level of Experience`.
   - The generated paths include phases with detailed descriptions, durations, and recommended resources.

### 2. **Google Authentication**
   - Users must sign in with Google to generate learning paths.
   - Secure authentication using the `@react-oauth/google` package.
   - Users can log out with a single click.

### 3. **Chatbot Integration**
   - `ExperienceChatbot` dynamically determines the user's experience level.
   - Pre-selects the appropriate `Level of Experience` in the form when navigating to the `LearningPathGenerator` component.
   - Updates seamlessly if the user restarts the chatbot and receives a new experience level.

### 4. **Responsive Design**
   - Fully responsive layout for an optimal experience on all devices.
   - Interactive components like dropdown menus and hover effects enhance usability.

### 5. **Error Handling**
   - Alerts users if they attempt to generate a learning path without signing in.
   - Displays meaningful error messages when an issue occurs during path generation.

### 6. **Optimized User Experience**
   - Real-time loading states during path generation.
   - Clear feedback for missing or incomplete inputs.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Authentication**: Firebase Authentication
- **API Integration**: Custom Hooks (`useFetchLearningPath`) for fetching learning paths from Gemini 1.5 Flash LLM
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Database**: Firestore Database is used to store user details

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- A Google Cloud project with OAuth credentials.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/learnpath-generator.git
   cd learnpath-generator
   
2. Install dependencies:
   ```bash
   npm install

1. **Go to Firebase Console**:  
   Visit the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. **Enable Authentication and Firestore Database**:  
   - Navigate to the **Authentication** section and enable the authentication method you want (e.g., Google Sign-In).  
   - Go to the **Firestore Database** section and set up a Firestore database in either test or production mode.

3. **Obtain Firebase Configuration Details**:  
   - In your Firebase project settings, locate the configuration details (API key, Auth domain, Project ID, etc.).

4. **Add Firebase Configuration to a `.env` File**:  
   Create a `.env` file in the root of your project and include the following Firebase configuration:

   ```env
   REACT_APP_FIREBASE_API_KEY=<your-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-app-id>


4. Start the development server:
  ```bash
  npm start
   
