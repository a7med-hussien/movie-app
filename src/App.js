import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";

import './App.css';

function App() {
	return (
		<div>
			<BrowserRouter>

				<Navbar />

				<Route path="/" exact component={Home} />
				<Route path="/:movieId" component={MovieInfo} />
			</BrowserRouter>

			{/* <Home /> */}
			{/* <MovieInfo /> */}
		</div>
	);
}

export default App;
