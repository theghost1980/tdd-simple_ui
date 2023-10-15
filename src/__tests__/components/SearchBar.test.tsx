import { act, render, screen,  } from "@testing-library/react"

import '@testing-library/jest-dom'
import SearchBar from "../../components/SearchBar"
import userEvent from "@testing-library/user-event"

describe('Search Bar Test', () => { 
    afterEach(() => {
        jest.clearAllMocks()
    })
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
        
        render(<SearchBar/>);

        const inputElement = screen.getByTestId('search-text');
        await act(async () => {
            await userEvent.type(inputElement, "hive account");
        });
        
        expect(inputElement).toHaveValue('hive account');
  
    })

    it('must invoke a handleSearch function when clicked', async () => {
         const spyLogger = jest.spyOn(console, "log");
         render(<SearchBar />);

         const buttonElement = screen.getByTestId("search-button");
         await act(async () => {
           await userEvent.type(screen.getByTestId('search-text'), 'hive accounts');
           await userEvent.click(buttonElement);
         });
         expect(spyLogger).toBeCalledWith("searching");
    })

    it('must not call if input is empty', async () => {
        const spyLogger = jest.spyOn(console, "log");
        render(<SearchBar />)
        const buttonElement = screen.getByTestId("search-button");
        await act(async () => {
          await userEvent.click(buttonElement);
        });

        expect(spyLogger).not.toBeCalledWith("searching");
        
    })
    

 })