import {render} from '@testing-library/react';
import React from 'react';
import Logo  from './index';


it("checkRenderModal", () => {
  const {queryByTitle} = render(<Logo/>);
  const modal = queryByTitle("logo");
  expect(modal).toBeTruthy();
})
