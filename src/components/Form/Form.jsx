import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './Form.scss'

const Form = ({ onSubmit }) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setText("");
        onSubmit(event.target[0].value);
    };

  return (
    <form className="text-field" onSubmit={handleSubmit}>
      <input
        className="text-field__input"
        type="text"
        aria-label="Write a new todo item"
        placeholder="Add your task here..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="text-field__button"
        type="submit"
        aria-label="Submit new task"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form>
  );
}

export default Form;