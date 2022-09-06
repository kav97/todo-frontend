import { useEffect, useState } from 'react';
import './App.scss';
import ToDoCardContainer from './containers/ToDoCardContainer/ToDoCardContainer';

const App = () => {

  const[toDos, setToDos] = useState([]);
  
  const getToDos = async () => {

    const url = `http://localhost:8080/todos`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(res.status + " error with request");
      }

      const toDoData = await res.json();
      setToDos(toDoData);
      console.log(toDoData);

    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
    <h1>Hello</h1>
    <ToDoCardContainer toDoArray = {toDos}/>
    </>
  );
}

export default App;
