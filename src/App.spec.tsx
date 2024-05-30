import { cleanup, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";

describe("removing items", () => {
	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		cleanup();
	});

	it("removing an item when remove button is clicked", async () => {
		// first, by adding the item
		const input = screen.getByLabelText("Adicione um novo item à lista");
		const addButton = screen.getByRole("button", { name: "Adicionar" });

		await userEvent.type(input, "item 1");
		userEvent.click(addButton);

		// now we remove
		const removeButton = await screen.findByRole("button", { name: "Remover" });

		userEvent.click(removeButton);

		await waitForElementToBeRemoved(() => screen.getAllByText("item 1"));
	});
});
