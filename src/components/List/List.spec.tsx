import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { List } from ".";

describe("List", () => {
	beforeEach(() => {
		render(<List list={["item 1", "item 2", "item 3"]} removeButton />);
	});

	it("verify if the list is being rendered correctly", () => {
		const items = screen.getAllByText("item 1");

		items.forEach((item) => {
			expect(item).toBeInTheDocument();
		});
	});

	it("check that the remove button is removing the item", async () => {
		const removeButton = screen.getAllByRole("button", { name: "Remover" });

		userEvent.click(removeButton[0]);

		await waitForElementToBeRemoved(() => screen.getAllByText("item 1"));
	});
});
