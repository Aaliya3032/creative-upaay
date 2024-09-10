import { createSlice } from '@reduxjs/toolkit';

const defaultTasks = [
    { id: 1, name: 'Initial Task 1', description: 'Default task description', status: 'To Do' },
    { id: 2, name: 'Initial Task 2', description: 'Default task description', status: 'In Progress' },
    { id: 3, name: 'Initial Task 3', description: 'Default task description', status: 'Done' },
  ];

if(!localStorage.getItem('tasks')){
    localStorage.setItem('tasks', JSON.stringify(defaultTasks))
}

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) 
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state,action) => {
         state.tasks.push(action.payload); //adding new task in the existing tasks
         localStorage.setItem('tasks',JSON.stringify(state.tasks)) //update localStorage with the new task
        },
        moveTask: (state,action) => {
            const {taskId , newStatus } = action.payload;
            const task = state.tasks.find((task) => task.id === taskId);
            if(task){
                task.status = newStatus;
                localStorage.setItem('tasks',JSON.stringify(state.tasks));
            }
        },
        filterTasks: (state,action) => {
            const { search, status } = action.payload;
            let filteredTasks = state.tasks;

            if (search) {
                filteredTasks = filteredTasks.filter((task) =>
                  task.name.toLowerCase().includes(search.toLowerCase())
                );
              }

              if (status) {
                filteredTasks = filteredTasks.filter((task) => task.status === status);
              }

              state.filteredTasks = filteredTasks;
        }
    }
})

export const {addTask,moveTask,filterTasks} = tasksSlice.actions;

export default tasksSlice.reducer;