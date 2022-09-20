import { render } from "@testing-library/react";
import Home from "./Home";

it("Should render the home page to screen", () => {
    const { container } = render(<Home />);
  
    expect(container).toMatchSnapshot();
});