import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Layout from "./components/Layout/Layout";
import { DataProvider } from "./data/dataContext";

function App() {
	return (
		<DataProvider>
			<div className="App">
				<Layout />
			</div>
		</DataProvider>
	);
}

export default App;
