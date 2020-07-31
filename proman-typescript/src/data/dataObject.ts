interface board {
	id: number;
	title: string;
	columnIds: number[];
}

interface column {
	id: number;
	title: string;
	cardIds: number[];
}

interface card {
	id: number;
	title: string;
	boardId: number;
}
export const boards: Array<board> = [
	{
		id: 1,
		title: "Board 1",
		columnIds: [1, 2, 3, 4, 5],
	},
	{
		id: 2,
		title: "Board 2",
		columnIds: [1, 2, 3, 4],
	},
];
export const columns: Array<column> = [
	{
		id: 1,
		title: "Todo",
		cardIds: [1, 2, 3, 4],
	},
	{
		id: 2,
		title: "Planing",
		cardIds: [1, 2, 3, 4, 5],
	},
	{
		id: 3,
		title: "In Progress",
		cardIds: [1, 2, 3, 4, 5],
	},
	{
		id: 4,
		title: "Review",
		cardIds: [1, 2, 3, 4, 5],
	},
	{
		id: 5,
		title: "Done",
		cardIds: [1, 2, 3, 4],
	},
];
export const cards: Array<card> = [
	{
		id: 1,
		title: "Card 1",
		boardId: 1,
	},
	{
		id: 2,
		title: "Card 2",
		boardId: 1,
	},
	{
		id: 3,
		title: "Card 3",
		boardId: 1,
	},
	{
		id: 4,
		title: "Card 4",
		boardId: 2,
	},
	{
		id: 5,
		title: "Card 5",
		boardId: 2,
	},
];
