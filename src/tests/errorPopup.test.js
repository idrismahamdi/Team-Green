import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPopup from '../components/popups/ErrorPopup';

describe('ErrorPopup', () => {
    it('renders the component with the provided error message and close functionality', () => {
        const mock = jest.fn()
        render(<ErrorPopup errorBody={"body of error"} errorHeader={"header of error"} closeFunc={mock} />);
        const linkElement = screen.getByText("body of error");
        expect(linkElement).toBeInTheDocument();
    });
});