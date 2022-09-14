import { useState } from "react";
import './Form.scss';
import niceMeme from '../../assets/images/nice.gif';
import noMeme from '../../assets/images/no-please.gif'

const Form = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    let counterStyle = "text-field__counter";

    const handleSubmit = (event) => {
      event.preventDefault();
      setText("");
      onSubmit(event.target[0].value);
      if(event.target[0].value.length === 0 || event.target[0].value.length > 255) return alert("Please enter a todo between 0 - 255 characters long!");
    };

    const handleTextandCount = (event) => {
      setText(event.target.value);
      setCharCount(event.target.value.length);
    }

    if (charCount === 0 || charCount > 255){
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
    </form> 
    <p className={counterStyle}>{charCount}/255</p>
    {charCount === 0 || charCount > 255 ? <img src={noMeme} alt="Michael Scott saying no." className="character-response"/> : <img src={niceMeme} alt="Kid thumbs up." className="character-response"/>}
    </>
  );
}

export default Form;