import React from 'react';
// React testing library includes a render method to mount our components to an in-memory DOM
import * as rtl from '@testing-library/react';
import 'jest-dom/extended-expect';
import App from './App';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
 // test in here
});
