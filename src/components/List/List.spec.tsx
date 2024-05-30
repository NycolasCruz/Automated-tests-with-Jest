import { cleanup, render, screen } from "@testing-library/react";

import { List } from ".";

describe("verify the list", () => {
	beforeEach(() => {
		render(<List list={["item 1", "item 2", "item 3"]} />);
	});

	afterEach(() => {
		cleanup();
	});

	it("verify if the list is being rendered correctly", () => {
		const items = screen.getAllByText("item 1");

		items.forEach((item) => {
			expect(item).toBeInTheDocument();
		});
	});
});
