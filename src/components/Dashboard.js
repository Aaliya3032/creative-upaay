import React from "react";
import { useSelector , useDispatch } from 'react-redux';
import Filter from "./Filter";
import { filterTasks } from "../redux/tasksSlice";
import ToDoColumn from "./ToDoColumn";
import TaskColumn from "./TaskColumn";

const Dashboard = () => {
    const tasks = useSelector((state) => state.tasks.filteredTasks || state.tasks.tasks); // we are using filtered tasks if available otherwise using all tasks
    const dispatch = useDispatch()

    const todoTasks = tasks.filter((task) => task.status === 'To Do');
    const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
    const doneTasks = tasks.filter((task) => task.status === 'Done');
 
    const handleFilterChange = (filters) => {
        dispatch(filterTasks(filters));
      };
    

return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <Filter onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-3 gap-8">
            <ToDoColumn tasks={todoTasks} status="To Do"/>
            <TaskColumn title="In Progress" color="yellow-500" tasks={inProgressTasks} status="In Progress"/>
            <TaskColumn title="Done" color="green-500" tasks={doneTasks} status="Done"/>
        </div>
    </div>
)
}
export default Dashboard;