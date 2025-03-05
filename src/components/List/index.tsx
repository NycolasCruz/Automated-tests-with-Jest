type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

export function List({ list, setList }: Props) {
	function handleTheRemovalOfTheItemFromTheList(index: number) {
		const updatedList = [...list];

		updatedList.splice(index, 1);
		setList && setList(updatedList);
	}

	return (
		<ul
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0.5rem",
				padding: 0,
				marginTop: "1.5rem",
				marginBottom: 0,
			}}
		>
			{list.map((item, index) => (
				<li
					key={`item-${index}`}
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: "0.5rem",
					}}
				>
					{item}
					<button onClick={() => handleTheRemovalOfTheItemFromTheList(index)}>Remover</button>
				</li>
			))}
		</ul>
	);
}
