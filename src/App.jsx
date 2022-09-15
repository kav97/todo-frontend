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
          <a className="nav-bar__title" href="/">
            My To-Do's
          </a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<AddToDo />}></Route>
          <Route path="/update/:id" element={<UpdateToDo />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;