import "./ToDoCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const ToDoCard = ({ toDos = [], deleteToDo }) => {
  return (
    <>
      {toDos.map((toDo) => {
        return (
          <div className="todo-card" key={toDo.id}>
            <p className="todo-card__text">{toDo.text}</p>
            <p className="todo-card__date">
              {toDo.dateCreated.substring(0, 10)}
            </p>
            <div className="todo-card__buttons">
              <button
                className="todo-card__buttons todo-card__buttons--update"
                aria-label="Navigate to update to-do item"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/update/${toDo.id}`;
                }}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                className="todo-card__buttons todo-card__buttons--delete"
                aria-label="Delete to-do item"
                onClick={() => deleteToDo(toDo.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ToDoCard;