import './ToDoCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const ToDoCard = ({ toDos = [], deleteToDo, noToDos}) => {
    if (toDos.length === 0) {
        return <div className="empty-list">{noToDos}</div>
    }

    return (
        <>
            {toDos.map((toDo) => {
                return (
                    <div className="todo-card" key={toDo.id}>
                        <p>{toDo.text}</p>
                        <p>{toDo.dateCreated}</p>
                        <button
                            className="list__edit"
                            aria-label="Edit todo item"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`/update/${toDo.id}`;
                            }}
                        >
                        <FontAwesomeIcon icon={faPen} />
                        </button>
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
        </>
    )
}

export default ToDoCard