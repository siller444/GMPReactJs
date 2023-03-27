import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Counter } from "../../src/components";

describe('Testing Counter component', () => {
  test('init value', () => {
    render(<Counter startFrom={5} />);
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
  
  test('increment event', () => {
    render(<Counter startFrom={5} />);
    fireEvent.click(screen.getByRole('button', {name: '+'}));
    expect(screen.getByText(/6/i)).toBeInTheDocument();
  });
  
  test('decrement event', () => {
    render(<Counter startFrom={5} />);
    fireEvent.click(screen.getByRole('button', {name: '-'}));
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});
