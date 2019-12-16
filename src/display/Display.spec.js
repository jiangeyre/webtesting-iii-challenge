// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const closed = rtl.render(<Display closed={true}/>);
    expect(closed.getByText("Closed"));

    const open = rtl.render(<Display closed={false}/>);
    expect(open.getByText("Open"));
})

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const locked = rtl.render(<Display locked={true} />);
    expect(locked.getByText("Locked"));

    const unlocked = rtl.render(<Display locked={false} />);
    expect(unlocked.getByText("Unlocked"));
});

test("when `locked` or `closed` use the `red-led` class", () => {
    const locked = rtl.render(<Display locked={true} />);
    expect(locked.getByText("Locked")).toHaveClass("red-led");

    const closed = rtl.render(<Display closed={true}/>);
    expect(closed.getByText("Closed")).toHaveClass("red-led");
});

test("when `unlocked` or `open` use the `green-led` class", () => {
    const unlocked = rtl.render(<Display locked={false} closed={true} />);
    expect(unlocked.getByText("Unlocked")).toHaveClass("green-led");

    const open = rtl.render(<Display closed={false}/>);
    expect(open.getByText("Open")).toHaveClass("green-led");
});