# Buddy | Task Management App

# Introduction
- Buddy is a simple task management app that keeps track of your tasks, due dates, and completion status.

> [!NOTE]
> This is a frontend project using React. No backend is used here. App is run in a development environment.

## Languages, Libraries, and Key Elements Used
- React
- Typescript for type checking to catch potential errors
- Bootstrap for styling
- Auth0 to authorize and authenticate user to use the app
- useContext to store global data of tasks added in a session
- useState to store and update state variables
- useNavigate to navigate between pages
- useReducer to handle add/delete/update tasks

# Pages
- Home
  - Home page with log in / sign up page
  - Once signed up, home page reloads to have a button to the tasks page
- About
  - Before signing in, the About page is accessible to potential users to learn more about the app
- Tasks
  - Dashboard to add, view details, update, and delete tasks
  - Tasks have a green background if completed and yellow if they are in progress
  - Once the page refreshes or user logs out, tasks reset as they are currently not stored to localstorage or to a database.

# Getting started
1. Clone this Github repository
2. Navigate to the "TaskManagementApp" directory
3. Install dependencies: `npm install`
4. Start the app with: `npm run dev`