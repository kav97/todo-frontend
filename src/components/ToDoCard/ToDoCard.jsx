import './ToDoCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ToDoCard = ({ toDos = [], deleteToDo, noToDos}) => {
    if (toDos.length === 0) {
        return <div className="empty-list">{noToDos}</div>
    }

    return (
        <div className="todo-container">
            {toDos.map((toDo) => {
                return (
                    <div className="todo-card" key={toDo.id}>
                        <p>{toDo.text}</p>
                        <p>{toDo.dateCreated}</p>
                        <button
                            className="list__delete"
                            aria-label="Delete todo item"
                            onClick={() => deleteToDo(toDo.id)}
                        >
                        <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                )
                
            })}
        </div>
    )
}

export default ToDoCard