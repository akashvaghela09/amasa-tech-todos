import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { setTodoList } from "../redux/app/appSlice";
import { useSelector, useDispatch } from "react-redux";

const Task = ({ id, title, detail = "", completed }) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.app);

  const handleDelete = () => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    dispatch(setTodoList(newTodoList));
  };

  const handleComplete = () => {
    const newTodoList = todoList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    dispatch(setTodoList(newTodoList));
  };

  return (
    <div className="bg-white border-2 border-black shadow-hard backdrop-blur-md">
      <div className="p-4">
        <p
          className={`text-xl font-bold line-clamp-2 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        {detail.length > 0 && (
          <p className={`text-sm line-clamp-2 ${completed && "line-through"}`}>
            {detail}
          </p>
        )}
      </div>
      <div className="border-t-2 border-black flex divide-x-2 divide-black">
        <span
          onClick={() => handleDelete()}
          className="w-1/2 flex justify-center p-2 active:bg-slate-200 cursor-pointer"
        >
          <MdOutlineDeleteOutline className="text-2xl" />
        </span>
        <span
          onClick={() => handleComplete()}
          className="w-1/2 flex justify-center p-2 active:bg-slate-200 cursor-pointer"
        >
          {completed ? (
            <IoIosCheckmarkCircle className="text-2xl" />
          ) : (
            <IoIosCheckmarkCircleOutline className="text-2xl" />
          )}
        </span>
      </div>
    </div>
  );
};

export { Task };
