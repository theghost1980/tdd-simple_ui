import { act, render, screen, waitFor,  } from "@testing-library/react"

import '@testing-library/jest-dom'
import SearchBar from "../../components/SearchBar"
import userEvent from "@testing-library/user-event"
import { api } from "../../api/hive-api"
import { dataUSername } from "../../test/__ mocks __/data-reference/data-username"

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
    
    it('must show hive user data', async () => {
        const spyApiGetAccount = jest.spyOn(api,'getAccount').mockResolvedValue([dataUSername]);
        render(<SearchBar />);
        const buttonElement = screen.getByTestId("search-button");
           await userEvent.type(
             screen.getByTestId("search-text"),
             "zullyscott"
           );
          await userEvent.click(buttonElement);
        expect(spyApiGetAccount).toBeCalledWith('zullyscott');

       await waitFor( () => {
            expect(screen.getByTestId('data-username').textContent).toBe('zullyscott');
        })
    });

    it('must show not found message', async () => {
      const spyApiGetAccount = jest.spyOn(api,'getAccount').mockRejectedValue(new Error('User not found!'));

        render(<SearchBar />);
        const buttonElement = screen.getByTestId("search-button");
           await userEvent.type(
             screen.getByTestId("search-text"),
             "zullyscott"
           );
          await userEvent.click(buttonElement);
        expect(spyApiGetAccount).toBeCalledWith('zullyscott');

       await waitFor( () => {
            expect(screen.getByText('User not found!')).toBeInTheDocument();
        })
    });

 })