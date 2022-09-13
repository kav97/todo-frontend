import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDoCardContainer from "../ToDoCardContainer/ToDoCardContainer";

const Home = () => {

    return (
        <>
        <button onClick={() => {
            window.location.href=`/create`;
            }}
          >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <ToDoCardContainer />
        </>
    )
  }
  
  export default Home;
  