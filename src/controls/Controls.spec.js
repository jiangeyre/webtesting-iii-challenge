// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

// Gate

test("cannot be opened if it is locked", () => {

    const wrapper = rtl.render(<Controls locked={true} closed={true}/>);
    expect(wrapper.getByTestId("knob")).not.toBeEnabled();

});

test("cannot be closed if it is locked", () => {

    const wrapper = rtl.render(<Controls locked={true} closed={false}/>);
    expect(wrapper.getByTestId("knob")).not.toBeEnabled();

});


// // Controls Component
// //
// // provide buttons to toggle the `closed` and `locked` states.
// // buttons' text changes to reflect the state the door will be in if clicked
// // the closed toggle button is disabled if the gate is locked
// // the locked toggle button is disabled if the gate is open