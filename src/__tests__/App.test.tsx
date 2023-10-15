import {render, screen} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App tests:', () => {
    it('Must display header title', () => {
        render(<App />);
        expect(screen.getByTestId('main_header').textContent).toBe('Search HIVE App'); 
    });

    it('Must render the search bar', () => {
        render(<App />);
        expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    });

    
});