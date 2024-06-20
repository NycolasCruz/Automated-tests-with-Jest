import { cleanup, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";

import { App } from "./App";

describe("manipulating items", () => {
	beforeAll(() => {
		render(<App />);
	});

	afterEach(() => {
		cleanup();
	});

	it("adding and then removing the item", async () => {
		// first we add the item
		const input = screen.getByLabelText("Adicione um novo item à lista");
		const addButton = screen.getByRole("button", { name: "Adicionar" });

		await userEvent.type(input, "item 1");
		userEvent.click(addButton);

		// now we remove
		const removeButton = await screen.findByRole("button", { name: "Remover" });

		userEvent.click(removeButton);

		await waitForElementToBeRemoved(() => screen.getAllByText("item 1"));
	});

	it("adding random items", async () => {
		const URL = "https://jsonplaceholder.typicode.com/todos?_limit=2";

		http.get(URL, () => {
			return HttpResponse.json([
				{
					userId: 1,
					id: 1,
					title: "delectus aut autem",
					completed: false,
				},
				{
					userId: 1,
					id: 2,
					title: "quis ut nam facilis et officia qui",
					completed: false,
				},
			]);
		});
	});
});
