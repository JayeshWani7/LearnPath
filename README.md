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
- **Authentication**: Google OAuth 2.0
- **API Integration**: Custom Hooks (`useFetchLearningPath`) for fetching learning paths
- **State Management**: React Hooks (`useState`, `useEffect`)

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

3. Set up Google OAuth:
  - Create credentials in the Google Cloud Console.
  - Replace the OAuth client ID in the GoogleLogin component with your credentials.

4. Start the development server:
  ```bash
  npm start
   
