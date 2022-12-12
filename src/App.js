import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/About';
import Education from './components/Education';
import MyWork from './components/Work';

function App() {
	return (
		<div className='App'>
			{/* <style>{'body { background-color: RGB(0, 0, 0); }'}</style> */}
			<NavBar />
			<Routes>
				<Route path='/about' element={<AboutMe />} />
				<Route path='/education' element={<Education />} />
				<Route path='/works' element={<MyWork />} />
			</Routes>
		</div>
	);
}

export default App;
