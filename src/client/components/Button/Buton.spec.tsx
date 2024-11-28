import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Button } from './Button';

import "@testing-library/jest-dom";

describe('Button', () => {
    it('renders button with default props', () => {
        const { getByRole } = render(<Button />);
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders button with custom className', () => {
        const { getByRole } = render(<Button className="custom-class" />);
        expect(getByRole('button')).toHaveClass('custom-class');
    });

    it('renders button with different view and size', () => {
        const { getByRole } = render(<Button view="action" size="l" />);
        expect(getByRole('button')).toHaveClass('action l');
    });

    it('renders button with children', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('renders button with additional props', () => {
        const onClick = jest.fn();
        const { getByRole } = render(<Button onClick={onClick} />);
        fireEvent.click(getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
