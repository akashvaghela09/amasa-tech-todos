import React, { useEffect, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setTodoList } from "../redux/app/appSlice";

const AddTaskModal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const inputRef = useRef(null);

  // Get todoList from redux store
  const { todoList } = useSelector((state) => state.app);

  const handleTaskForm = async () => {
    // If task is empty, return
    if (!task) return;

    // Create new task
    let taskObj = {
      id: uuid(),
      title: task,
      detail: detail,
      completed: false,
    };

    // Add task to todoList
    dispatch(setTodoList([taskObj, ...todoList]));

    // Reset task and details
    setTask("");
    setDetail("");

    // Close modal
    toggleModal();
  };

  const handleKeyDown = (e) => {
    // Submit task on enter key press
    if (e.key === "Enter") handleTaskForm();
  };

  useEffect(() => {
    // Focus on input when modal is opened
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-screen h-screen z-30 fixed top-0 left-0 backdrop-blur-sm brightness-95 flex justify-center items-center">
      <div className="w-4/5 md:w-1/3 flex flex-col gap-4 p-4 border-2 border-black bg-white shadow-hard">
        <div className="m-1">
          <p className="text-xl font-bold">Task Title</p>
          <input
            ref={inputRef}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Homework"
            onKeyDown={(e) => handleKeyDown(e)}
            className="border-2 border-black p-2 text-xl w-full"
          />
        </div>
        <div className="m-1">
          <p className="text-xl font-bold">Task Details</p>
          <textarea
            rows={5}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Maths, Physics, History"
            className="border-2 border-black p-2 text-xl w-full"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleTaskForm()}
            className="border-2 border-black p-2 w-full bg-green-300 active:bg-green-400 text-xl font-bold select-none"
          >
            Submit
          </button>
          <button
            onClick={() => toggleModal()}
            className="border-2 border-black p-2 w-full bg-red-300 active:bg-red-400 text-xl font-bold select-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { AddTaskModal };
