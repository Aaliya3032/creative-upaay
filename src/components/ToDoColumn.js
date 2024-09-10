import React, { useState } from "react";
import { useDrop } from 'react-dnd';
import { useDispatch } from "react-redux";
import TaskCard from './TaskCard';
import { AiOutlinePlus } from 'react-icons/ai'; 

const ToDoColumn = ({tasks,status}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      // Dispatch moveTask action to change the task status when dropped
      if (item.status !== status) {
        dispatch({
          type: 'tasks/moveTask',
          payload: { taskId: item.taskId, newStatus: status },
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleAddTask = () => {
    if (taskName) {
      dispatch({
        type: 'tasks/addTask',
        payload: {
          id: new Date().getTime(),
          name: taskName,
          description: description || 'No description provided',
          status: 'To Do',
        },
      });
      setTaskName('');
      setDescription('');
      setShowForm(false); // Hide the form after adding the task
    }
  };
 return (
   <div ref={drop}
        className={`p-4 w-full bg-gray-100 rounded-lg shadow-lg ${
          isOver ? 'bg-green-100' : ''
        }`}
        >
    
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></div>
        <h2 className="text-xl font-semibold">To Do</h2>
        <span className="bg-[#E0E0E0] text-[#625F6D] rounded-full px-2 py-2text-sm ml-2">{tasks.length}</span>
        </div>
      <button
          onClick={() => setShowForm(!showForm)} 
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          <AiOutlinePlus size={10} />
        </button>
      </div>

      {showForm && (
        <div className="mb-4">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            className="border p-2 rounded-md w-full mb-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="border p-2 rounded-md w-full mb-2"
          ></textarea>
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white p-2 rounded-md w-full"
          >
            Add Task
          </button>
        </div>
      )}

      <div className={`h-0.5 bg-blue-500 w-full mb-4`}></div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
   </div>
 )
}

export default ToDoColumn;

