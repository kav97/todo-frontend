import { render } from "@testing-library/react";
import Form from "./Form";

it("Should render a form to screen", () => {
    const { component } = render(<Form />);
  
    expect(component).toMatchSnapshot();
});