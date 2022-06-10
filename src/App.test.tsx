
import "@testing-library/dom"
import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App'

test("hello", async () => {
    render(
        <App />
    )

    expect(() => {
        screen.getByText(/Hello World/)
    }).not.toThrow()
})