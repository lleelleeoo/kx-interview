import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { PageHeader } from './PageHeader';

import '@testing-library/jest-dom';
describe('PageHeader', () => {
  it('renders a header element', () => {
    const { getByTestId } = render(<PageHeader />);
    expect(getByTestId('page-header')).toBeInTheDocument();
  });

  it('renders logo', () => {
    const { getByTestId } = render(<PageHeader />);
    expect(getByTestId('page-header-logo')).toBeInTheDocument();
  });

  it('renders a button with text Logout inside the wrapper', () => {
    const { getByTestId } = render(<PageHeader />);
    expect(getByTestId('page-header-logout')).toBeInTheDocument();
  });
});
