# Auto-Portfolio Generator

This is a web application that allows users to create, customize, and share professional portfolios and resumes with ease. Users can choose from a variety of templates, input their personal and professional information, and generate a shareable URL for their portfolio or download a PDF version of their resume.

## Features

- **User Authentication:** Secure sign-up and login functionality using Firebase Authentication.
- **Multiple Templates:** A selection of beautifully designed templates (Classic, Modern, Creative, Minimalist, Tech, and Corporate) to choose from.
- **Portfolio Generation:** Users can input their details (name, title, bio, experience, education, skills, etc.) to generate a personal portfolio.
- **Live Preview:** See a live preview of the portfolio as you fill in your details.
- **Shareable URL:** Each generated portfolio is given a unique, shareable URL so others can view it.
- **PDF Resume Download:** Download a PDF version of your generated resume for offline use and job applications.
- **Responsive Design:** The application is fully responsive and works on all devices.
- **Static Site Export:** Built with Next.js's static export feature for fast loading times and easy deployment.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Database:** [Firebase](https://firebase.google.com/) (Firestore, Firebase Authentication)
- **PDF Generation:** [html2canvas](https://html2canvas.hertzen.com/), [jsPDF](https://github.com/parallax/jsPDF)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/)
- A Firebase project.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/auto-portfolio.git
    cd auto-portfolio
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    - Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    - In your project's settings, add a new Web App.
    - Copy the Firebase configuration object.
    - Create a file named `firebaseConfig.js` in the `src/lib/` directory.
    - Add your copied configuration to the file like this:

    ```javascript
    // src/lib/firebaseConfig.js
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    export { db, auth };
    ```

4.  **Configure Firestore Rules:**
    - In the Firebase Console, go to `Firestore Database` > `Rules`.
    - Paste the following rules and publish them:
    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /portfolios/{portfolioId} {
          allow read: if true;
          allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
          allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
        }
      }
    }
    ```

### Running the Application

1.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2.  **Build for production:**
    The project is configured for a static export.
    ```bash
    npm run build
    ```
    This will create an `out` directory with the static files of your application.

## Deployment

This project is configured for static site generation. You can deploy the contents of the `out` directory to any static hosting provider.

### Deploying to Render

1.  **Push your code to a GitHub repository.**
2.  Go to the [Render Dashboard](https://dashboard.render.com/) and create a new **Static Site**.
3.  Connect your GitHub repository.
4.  Configure the build settings:
    - **Build Command:** `npm run build`
    - **Publish Directory:** `out`
5.  Click **Deploy**. Render will automatically build and deploy your site.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.