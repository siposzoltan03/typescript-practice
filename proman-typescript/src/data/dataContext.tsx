import React, { createContext, useEffect, useState, ContextType } from "react";
import Axios from "axios";

interface IDataContext {
	boards: { name: string; id: string }[] | null;
	lists: Array<{ id: string; name: string; idBoard: string }> | null;
}

export const DataContext = createContext<IDataContext | null>(null);

interface Props {
	children: React.ReactNode;
}

const getAllBoardUrl = `https://api.trello.com/1/members/me/boards?key=f0558b6fc14c53177c609926d2aa3971&token=9283612352f3b3b8468c84fa12be7d632d1032e32e81082ee91628f611a13603`;
const getCardsUrl = `https://api.trello.com/1/members/me/cards?key=f0558b6fc14c53177c609926d2aa3971&token=9283612352f3b3b8468c84fa12be7d632d1032e32e81082ee91628f611a13603`;
const getListsUrl = (idBoard: string): string => {
	return `https://api.trello.com/1/boards/${idBoard}/lists?key=f0558b6fc14c53177c609926d2aa3971&token=9283612352f3b3b8468c84fa12be7d632d1032e32e81082ee91628f611a13603`;
};

export const DataProvider = ({ children }: Props): React.ReactElement => {
	const [boards, setBoards] = useState<{ name: string; id: string }[] | null>(
		null,
	);
	const [lists, setLists] = useState<
		Array<{
			id: string;
			name: string;
			idBoard: string;
		}>
	>([]);
	const [cards, setCards] = useState([]);

	const fetchBoards = async () => {
		return await Axios.get(getAllBoardUrl, {
			headers: {
				"Content-type": "Application/json",
			},
		}).then((res) => setBoards(res.data));
	};

	const fetchCards = async () => {
		return await Axios.get(getCardsUrl, {
			headers: {
				"Content-type": "Application/json",
			},
		}).then((res) => setCards(res.data));
	};

	const fetchListsByBoard = async (id: string) => {
		const newLists = [...lists];
		return await Axios.get(getListsUrl(id), {
			headers: {
				"Content-type": "Applications/json",
			},
		}).then((res) => setLists([...newLists, res.data]));
	};

	const fetchAllList = async () => {
		boards?.map(async (board) => await fetchListsByBoard(board.id));
	};

	useEffect(() => {
		(async () => {
			await fetchBoards();
			await fetchCards();
		})();
	}, []);

	useEffect(() => {
		(async () => {
			await fetchAllList();
		})();
	}, [boards]);

	return (
		<DataContext.Provider
			value={{
				boards: boards,
				lists: lists,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
