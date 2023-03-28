import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from "../../src/components/Search";

describe('Testing Search component', () => {
    test('init value', () => {
        render(<Search initQuery="iii" onSearch={jest.fn()} />);
        expect(screen.getByDisplayValue('iii')).toBeInTheDocument();
    });

    test('onClick event', () => {
        const mockOnChange = jest.fn(q => q);
        render(<Search initQuery="iii" onSearch={mockOnChange} placeholderText="ppp" />);
        
        fireEvent.change(screen.getByPlaceholderText('ppp'), {target: {value: 'fff'}});
        // fireEvent.click(container.querySelector('.btn-search'));
        fireEvent.click(screen.getByRole('button'));
    
        expect(mockOnChange).toHaveReturnedWith('fff');
    });

    test('keyDown event', () => {
        const mockOnChange = jest.fn(q => q);
        const { container } = render(<Search initQuery="iii" onSearch={mockOnChange} placeholderText="ppp" />);
        const input = container.querySelector('input');
        
        fireEvent.change(input, {target: {value: 'fff'}});
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    
        expect(mockOnChange).toHaveReturnedWith('fff');
    });
});
