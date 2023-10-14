import {render, screen} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App tests:', () => {
    it('Must display Vite + React text', () => {
        render(<App />);
        expect(screen.getByTestId('header_main').textContent).toBe('Vite + React');
    });
});