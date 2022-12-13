import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div className='nav-bar main'>
			<Link to='/about'>
				<button className='nav-butt'>About</button>
			</Link>
			<Link to='/education'>
				<button className='nav-butt'>Education</button>
			</Link>
			<Link to='/works'>
				<button className='nav-butt'>Works</button>
			</Link>
		</div>
	);
}

export default NavBar;
