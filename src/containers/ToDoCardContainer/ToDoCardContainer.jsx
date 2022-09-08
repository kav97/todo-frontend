import "./ToDoCardContainer.scss";
import { useEffect, useState } from "react";
import ToDoCard from "../../components/ToDoCard/ToDoCard";

const ToDoCardContainer = () => {
  const [toDos, setToDos] = useState([]);

  const getToDos = async () => {
    const url = `http://localhost:8080/todos`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(res.status + " error with request");
      }

      const toDoData = await res.json();
      setToDos(toDoData);
      console.log(toDoData);
    } catch (error) {
      return error.message;
    }
  };

  const deleteToDo = async (id) => {
    const url = `http://localhost:8080/todo/${id}`;

    try {
      const res = await fetch(url, { method: "DELETE" });

      if (!res.ok) {
        throw new Error(res.status + " error with request");
      }

      const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
      setToDos(updatedToDos);
      console.log(updatedToDos);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div className="todo-container">
      <button onClick={() => {
        window.location.href=`/create`;
      }}>
        +
      </button>
      <ToDoCard
        toDos = {toDos}
        deleteToDo={deleteToDo}
        noToDos = "Oh no! There appears to be nothing to do today; take a break!"
      />
    </div>
  );
};

export default ToDoCardContainer;
