// import { useEffect, useState } from 'react';
import './App.scss';
import NewToDo from './containers/NewToDo/AddToDo';
import ToDoCardContainer from './containers/ToDoCardContainer/ToDoCardContainer';

const App = () => {

  return (
    <>
    <h1>My Todos</h1>
    <NewToDo />
    <ToDoCardContainer />
    
    </>
  );
}

export default App;
