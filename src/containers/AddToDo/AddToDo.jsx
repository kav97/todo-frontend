import Form from "../../components/Form/Form";

const AddToDo = () => {
  const addItem = async (text) => {
    const url = `http://localhost:8080/todo`;

    try {
      const res = await fetch(url, {
        method: "POST",
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

  return <Form onSubmit={addItem} />;
};

export default AddToDo;