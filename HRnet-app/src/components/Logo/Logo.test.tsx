import { render } from "@testing-library/react";
import Logo from "./index";

it("checkRenderLogo", () => {
  const { queryByTitle } = render(<Logo />);
  const logo = queryByTitle("logo");
  expect(logo).toBeTruthy();
});
