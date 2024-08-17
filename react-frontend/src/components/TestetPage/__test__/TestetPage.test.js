import React from "react";
import { render, screen } from "@testing-library/react";

import TestetPage from "../TestetPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders testet page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TestetPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("testet-datatable")).toBeInTheDocument();
    expect(screen.getByRole("testet-add-button")).toBeInTheDocument();
});
