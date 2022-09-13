import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './Form.scss'

const Form = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    let counterStyle = "text-field__counter";

    const handleSubmit = (event) => {
        event.preventDefault();
        setText("");
        onSubmit(event.target[0].value);
        if(!event.target.value || event.target.value.length > 255) return alert("Please enter a todo between 0 - 255 characters long!");
    };

    const handleTextandCount = (event) => {
      setText(event.target.value);
      setCharCount(event.target.value.length);
    }

    if (charCount > 175 && charCount <= 255) {
      counterStyle += " text-field__counter--amber";
    } else if (charCount === 0 || charCount > 255){
      counterStyle += " text-field__counter--red";
    }

  return (
    <>
    <form className="text-field" onSubmit={handleSubmit}>
      <input
        className="text-field__input"
        type="text"
        aria-label="Write a new todo item"
        placeholder="Add your task here..."
        value={text}
        onChange={(event) => handleTextandCount(event)} 
      />
      <button
        className="text-field__button"
        type="submit"
        aria-label="Submit new task"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </form> 
    <p className={counterStyle}>{charCount}/255</p>
    </>
  );
}

export default Form;