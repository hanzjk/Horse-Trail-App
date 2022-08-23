import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';

import Footer from './components/Footer/Footer';
import About from './pages/About';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/about" exact element={<About/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
