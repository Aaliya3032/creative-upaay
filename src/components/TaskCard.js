import React from "react";
import { useDrag } from "react-dnd";
import { RiMessage2Line } from "react-icons/ri";
import { FiFileMinus } from "react-icons/fi";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { taskId: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-4 border rounded-md bg-white shadow-md ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[#0D062D] font-bold">{task.name}</h3>
        <div className="flex gap-0.5">
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0D062D] rounded-full"></div>
        </div>
      </div>
      <p className="text-[#787486] mt-3">{task.description}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex -space-x-4 rtl:space-x-reverse">
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Rounded avatar"
          />
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rounded avatar"
          />
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Rounded avatar"
          />
        </div>
        <div className="flex ml-14 gap-1">
          <RiMessage2Line className="text-[#787486] mt-1.5" />
          <h3 className="text-[#787486]">12 comments</h3>
        </div>
        <div className="flex size-sm gap-1">
          <FiFileMinus size={14} className="text-[#787486] mt-1.5" />
          <h3 className="text-[#787486]">0 files</h3>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
