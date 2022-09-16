import "./Home.scss";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDoCardContainer from "../ToDoCardContainer/ToDoCardContainer";

const Home = () => {
  return (
    <div className="home-page">
      <button
        className="home-page__create-button"
        aria-label="Navigate to create a to-do"
        onClick={() => {
          window.location.href = `todo-frontend/create`;
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      <ToDoCardContainer />
    </div>
  );
};

export default Home;