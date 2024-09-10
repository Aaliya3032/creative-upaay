import React from "react";
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks,status,color }) => {
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

    return (
      <div
       ref={drop}
        className={`p-4 w-full bg-gray-100 rounded-lg shadow-lg ${
          isOver ? 'bg-green-100' : ''
        }`}>

          <div className="flex items-center mb-4">
          <div className={`w-2.5 h-2.5 bg-${color} rounded-full mr-2`}></div>
          <h2 className="text-xl font-semibold mr-2">{title}</h2>
          <span className="bg-[#E0E0E0] text-[#625F6D] rounded-full px-2 py-2text-sm">{tasks.length}</span>
          </div>

          <div className={`h-0.5 bg-${color} w-full mb-4`}></div>
         
         <div className="space-y-4">
         {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
         </div>
      </div>
    )
   }
   
   export default TaskColumn;