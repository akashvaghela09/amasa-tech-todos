import { useEffect, useState } from "react";
import { Task } from "./components/Task";
import { AddButton } from "./components/AddButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setTodoList } from "./redux/app/appSlice";

function App() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.app);

  const fetchDummyData = async () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let { data } = await axios.get(url);
    dispatch(setTodoList(data));
  };

  useEffect(() => {
    fetchDummyData();
  }, []);
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col gap-10 justify-start items-center p-10 pb-32 relative">
      <AddButton />
      <div className="md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col gap-6">
        {
          todoList.length > 0 &&
          todoList.map((item) => (
            <Task
              key={item?.id}
              id={item?.id}
              title={item?.title}
              detail={item?.detail}
              completed={item?.completed}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
