import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";

const UpdateToDo = () => {
  const { id } = useParams();

  const updateItem = async (text) => {
    try {
      const res = await fetch(`http://localhost:8080/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text,
          createdBy: "kav",
        }),
      });
      if (!res.ok) {
        throw new Error(res.status + " error with request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Form onSubmit={updateItem} />;
};

export default UpdateToDo;