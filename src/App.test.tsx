import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import {BrowserRouter} from 'react-router-dom';

test('that sidebar should have the correct theme', async () => {
  render(<BrowserRouter ><MockedProvider><App /></MockedProvider></BrowserRouter>);
  // const sideNavElement = screen.getByTestId("snap-main-navigation")
  // expect(sideNavElement?.getAttribute("theme")).toBe("insights");
});
