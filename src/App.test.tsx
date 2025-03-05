import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";

describe("manipulating items", () => {
	let input: HTMLElement, addButton: HTMLElement;

	beforeEach(() => {
		render(<App />);

		input = screen.getByLabelText("Adicione um novo item à lista");
		addButton = screen.getByRole("button", { name: "Adicionar" });
	});

	it("should add an item to the list", async () => {
		await userEvent.type(input, "item 1");
		await userEvent.click(addButton);

		await screen.findByText("item 1");
	});

	it("should remove an item from the list", async () => {
		await userEvent.type(input, "item 1");
		await userEvent.click(addButton);

		const removeButton = await screen.findByRole("button", { name: "Remover" });

		await userEvent.click(removeButton);

		await waitForElementToBeRemoved(() => screen.queryByText("item 1"));
	});
});
