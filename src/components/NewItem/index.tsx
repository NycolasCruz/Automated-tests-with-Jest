import { FormEvent, useState } from "react";

type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

export function NewItem({ list, setList }: Props) {
	const [value, setValue] = useState("");

	function handleAddingTheItemToTheList(event: FormEvent) {
		event.preventDefault();

		setList([...list, value]);
		setValue("");
	}

	return (
		<>
			<label htmlFor="new-item">Adicione um novo item à lista</label>

			<form style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
				<input id="new-item" value={value} onChange={(event) => setValue(event.target.value)} />

				<button disabled={!value} onClick={(event) => handleAddingTheItemToTheList(event)}>
					Adicionar
				</button>
			</form>
		</>
	);
}
