import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Display from './../Display';
import mockFetchShow from "../../api/fetchShow";

jest.mock("../../api/fetchShow");

const testShow = {
    name: "The Test Show",
    summary: "this is a great show when testing something...",
    seasons: [
        {
            id: 1,
            name: 'season one',
            episodes: [],
        },
        {
            id: 2,
            name: 'season two',
            episodes: [],
        },
        {
            id: 3,
            name: 'season three',
            episodes: [],
        }
    ]
    //add in approprate test data structure here.
}

test("render Display", () => {
    render(<Display />)
})

test("when the fetch button is pressed, the show component will display", async () => {
    render(<Display />)
    mockFetchShow.mockResolvedValueOnce(testShow);
    const button = screen.queryByRole('button')
    fireEvent.click(button)
    await waitFor(() => {
        const seasons = screen.queryAllByTestId("show-container");
        expect(seasons).toHaveLength(1)
    })
})

test("when the fetch button is pressed, the show component will display", async () => {
    render(<Display />)
    mockFetchShow.mockResolvedValueOnce(testShow);
    const button = screen.queryByRole('button')
    fireEvent.click(button)
    await waitFor(() => {
        const seasons = screen.queryAllByTestId("season-option");
        expect(seasons).toHaveLength(3)
    })
})

test("6", async () => {
    const mockfFct = jest.fn()
    render(<Display displayFunc={mockfFct}/>);
    const button = screen.queryByRole('button');
    fireEvent.click(button);
    await waitFor(() => {
        expect(fct).toHaveBeenCalledTimes(1);
    })
})












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.