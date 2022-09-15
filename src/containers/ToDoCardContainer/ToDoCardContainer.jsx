import "./ToDoCardContainer.scss";
import { useEffect, useState } from "react";
import ToDoCard from "../../components/ToDoCard/ToDoCard";
import noToDo from "../../assets/images/no-work.gif";

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

  if (toDos.length === 0) {
    return (
      <div className="empty-list">
        <p className="empty-list__message">
          Oh nooo! There appears to be nothing to do today. Why don't you add
          something to your list? ☝️
        </p>
        <img
          className="empty-list__img"
          src={noToDo}
          alt="Yikes nothing to do"
        />
      </div>
    );
  }

  return (
    <section className="todo-container">
      <ToDoCard toDos={toDos} deleteToDo={deleteToDo} />
    </section>
  );
};

export default ToDoCardContainer;