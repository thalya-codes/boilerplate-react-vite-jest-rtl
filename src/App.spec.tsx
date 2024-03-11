import '@testing-library/jest-dom';
import App from './App';
import {
 render,
 screen,
} from '@testing-library/react';

describe('App test suite', () => {
 it('Should be able to render the component App with the correct text', () => {
  render(<App />);

  expect(
   screen.queryByText(
    'Click on the Vite and React logos to learn more'
   )
  ).toBeInTheDocument();
 });
});
