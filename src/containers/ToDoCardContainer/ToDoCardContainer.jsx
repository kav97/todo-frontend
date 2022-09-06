import './ToDoCardContainer.scss'
import ToDoCard from '../../components/ToDoCard/ToDoCard';

const ToDoCardContainer = ({ toDoArray }) => {
    return (
        <div className="todo-container">
          {toDoArray.map((toDo) => (
            <ToDoCard
              key={toDo.id}
              text={toDo.text}
              dateCreated = {toDo.dateCreated}
            />
          ))}
        </div>
    );
};

export default ToDoCardContainer 