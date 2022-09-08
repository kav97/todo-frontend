// import { useEffect, useState } from 'react';
import './App.scss';
import AddToDo from './containers/AddToDo/AddToDo';
import ToDoCardContainer from './containers/ToDoCardContainer/ToDoCardContainer';
import UpdateToDo from './containers/UpdateToDo/UpdateToDo';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className='app'>
        <Link to={`/`}>
          <h1>My Todos</h1>
        </Link>
        
        <Routes>
          <Route path='/' element={<ToDoCardContainer />}></Route>
          <Route path='/create' element ={<AddToDo />}></Route>
          <Route path="/update/:id" element = {<UpdateToDo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
