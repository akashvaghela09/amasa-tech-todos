import React, { useState, useRef } from "react";
import { IoAdd } from "react-icons/io5";
import { AddTaskModal } from "./AddTaskModal";

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility 
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="md:w-4/5 lg:w-3/5 xl:w-2/5 md:flex hidden justify-end cursor-pointer">
        <div
          onClick={() => toggleModal()}
          className="border-2 border-black flex w-fit bg-amber-200 divide-x-2 divide-black shadow-hard active:brightness-90"
        >
          <div className="w-fit h-fit p-2 bg-amber-400">
            <IoAdd className="text-3xl" />
          </div>
          <div className="w-full p-2 flex items-center">
            <p className="text-xl font-bold select-none">Add New Task</p>
          </div>
        </div>
      </div>

      <div
        onClick={() => toggleModal()}
        className="border-2 border-black w-fit h-fit md:hidden p-2 bg-amber-400 fixed bottom-12 right-12 z-10 cursor-pointer active:brightness-90"
      >
        <IoAdd className="text-4xl" />
      </div>

      {showModal && <AddTaskModal toggleModal={toggleModal} />}
    </>
  );
};

export { AddButton };
