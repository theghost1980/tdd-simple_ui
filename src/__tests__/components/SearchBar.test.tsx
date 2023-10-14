import { act, render, screen,  } from "@testing-library/react"

import '@testing-library/jest-dom'
import SearchBar from "../../components/SearchBar"
import userEvent from "@testing-library/user-event"

describe('Search Bar Test', () => { 
    it('must find a testid of "search-text"', () => {
        render(<SearchBar />)
        
        expect(screen.getByTestId('search-text')).toBeInTheDocument()
    })

    it('must contain a placeholder of "search users...', () => {
      render(<SearchBar />);
      const inputElement = screen.getByPlaceholderText('Search Users...');
      expect(inputElement).toBeDefined();
    });

    it('must find a testid of "search-button"', () => {
        render(<SearchBar />);

        expect(screen.getByTestId("search-button")).toBeInTheDocument();
    })

    it('must change text when user types', async () => {
        render(<SearchBar/>)

        const inputElement = screen.getByTestId('search-text')
        await act(async () => {
            await userEvent.type(inputElement, "hive account")
        });
        
        screen.debug()
            expect(inputElement).toHaveTextContent('kcmaskc')
        

    })

    

 })