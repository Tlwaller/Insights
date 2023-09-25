import {MockedProvider} from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";

test('that sidebar should have the correct theme', () => {
  render(<BrowserRouter><MockedProvider><Header /></MockedProvider></BrowserRouter>);
  const snapLogo = screen.getByTestId("snap-logo")
  expect(snapLogo?.getAttribute("product")).toBe("snap-logo-insights");
});
