import './ToDoCard.scss'

const ToDoCard = ({text, dateCreated}) => {
    return (
        <div className="todo-card">
            <p>{text}</p>
            <p>{dateCreated}</p>
        </div>
      );
}

export default ToDoCard