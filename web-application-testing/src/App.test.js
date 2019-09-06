import React from 'react';
// React testing library includes a render method to mount our components to an in-memory DOM
import * as rtl from '@testing-library/react';
import App from './App';
import DashBoard, {addHit} from './components/dashboard';


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