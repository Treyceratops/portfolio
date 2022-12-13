import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/About';
import Education from './components/Education';
import Works from './components/Works';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

function App() {
	return (
		<div className='App'>
			{/* <style>{'body { background-color: RGB(0, 0, 0); }'}</style> */}
			<NavBar />
			<Contact />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/about' element={<AboutMe />} />
				<Route path='/education' element={<Education />} />
				<Route path='/works' element={<Works />} />
			</Routes>
		</div>
	);
}

export default App;
