import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Genre } from "../../src/components";

const list = [
    "genre 1",
    "genre 2",
    "genre 3",
    "genre 4",
];

describe('Genre Component', () => {
    test('Is all rendered', () => {
        render(<Genre data={list} onSelect={jest.fn()} />);

        for (let i = 0; i < list.length; i++) {
            expect(screen.getByText(list[i])).toBeInTheDocument();
        }
    });

    test('Is highlights a selected genre', () => {
        render(<Genre data={list} onSelect={jest.fn()} />);
        
        fireEvent.click(screen.getByText(list[3]));
        expect(screen.getByText(list[3])).toHaveClass("active-genre");
    });

    test('callback is called and passes correct genre', () => {
        const callback = jest.fn(v => {
            return v;
        });
        render(<Genre data={list} onSelect={callback} />);
        
        fireEvent.click(screen.getByText(list[2]));
        expect(callback).toBeCalled();
        expect(callback).toReturnWith(list[2]);
    });
});
