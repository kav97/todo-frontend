import Form from '../../components/Form/Form';
import './AddToDo.scss'

const AddToDo = () => {

    const addItem = async (text) => {
        if (!text) return alert("please enter a todo");

        const url = `http://localhost:8080/todo`;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "text": text,
                "createdBy": "kav"
                })
            })
            if (!res.ok) {
                throw new Error(res.status + " error with request");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="new-todo">
          <h2 className="new-todo__header">Add something to do...</h2>
          <Form onSubmit={addItem}/>
        </div>
    );
}

export default AddToDo