import React from 'react';
// React testing library includes a render method to mount our components to an in-memory DOM
import * as rtl from '@testing-library/react';
import App from './App';
import DashBoard, {addHit, addOut} from './components/dashboard';
import Display from './components/display';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
 // test in here
 rtl.render(<App />)
});

it('renders without crashing', () => {
  // test in here
  rtl.render(<DashBoard />)
 });


test('addHit adds 1 to the current score', () => {
  expect(addHit(0)).toBe(1);
});

test('addOut adds 1 to the ball track', () => {
  expect(addOut(0)).toBe(1);
});


test('contains Yankees and Away and Ball', () => {
  // Arrange
  const { getByText } = rtl.render(<Display />);
  // Act - getting the node by text
  getByText(/Yankees/i);
  getByText(/Away/i);
  getByText(/Ball/i);
  // Assertion is if ^^^ is truthy
});