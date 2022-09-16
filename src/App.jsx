import "./App.scss";
import AddToDo from "./containers/AddToDo/AddToDo";
import Home from "./containers/Home/Home";
import UpdateToDo from "./containers/UpdateToDo/UpdateToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <a className="nav-bar__title" href="todo-frontend/">
            My To-Do's
          </a>
        </nav>
        <Routes>
          <Route path="todo-frontend/" element={<Home />}></Route>
          <Route path="todo-frontend/create" element={<AddToDo />}></Route>
          <Route path="todo-frontend/update/:id" element={<UpdateToDo />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;