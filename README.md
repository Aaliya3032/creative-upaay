Approach
1) Component Structure:

I followed a component-based architecture with reusable components for the dashboard, task columns, and task cards.
The task columns were designed to allow filtering and drag-and-drop features using react-dnd to improve task management flexibility.

2) State Management:

Redux was used to handle global state for tasks. I created slices for managing tasks and implemented actions such as adding a task, filtering tasks by name/status, and moving tasks between columns.

3) Styling:

Tailwind CSS was chosen to streamline the styling process and ensure responsiveness across different screen sizes.

4) Task Filtering:

I implemented a filter component that allows users to search tasks by name and filter by status. This component is hidden by default and toggles when the filter button is clicked.

5) Drag and Drop:

I implemented drag-and-drop functionality for tasks, allowing users to move tasks between columns, which automatically updates the task status in Redux. 

Assumptions
1) Each task has a unique ID, a name, a description, and a status (either 'To Do', 'In Progress', or 'Done').
2) The user will interact with the application by adding tasks, dragging and dropping tasks between columns, and filtering tasks by name or status and edit the project title .
3) The drag-and-drop functionality is limited to moving tasks from one status to another in the order specified (i.e., from 'To Do' to 'In Progress' and then to 'Done').


How to Run the Project Locally
1) Clone the Repository:
git clone <repository-url>
2) Install Dependencies: Navigate to the project folder and run:
npm install
3) Run the Project: Start the development server using:
npm start
4) Usage:
    Open the app in your browser at http://localhost:3000.
    You can add tasks, filter them, and move them between columns using drag-and-drop.