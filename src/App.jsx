import './App.scss';
import AddToDo from './containers/AddToDo/AddToDo';
import Home from './containers/Home/Home';
import UpdateToDo from './containers/UpdateToDo/UpdateToDo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <div className='app'>

        <h1 className='title'><a className='title__link' href="/">My Todos</a></h1>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element ={<AddToDo />}></Route>
          <Route path="/update/:id" element = {<UpdateToDo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
