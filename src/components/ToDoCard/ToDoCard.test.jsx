import { render } from "@testing-library/react";
import ToDoCard from "./ToDoCard"

it("Should render the each To Do Card to screen", () => {
  const { component } = render(<ToDoCard />);

  expect(component).toMatchSnapshot();
});