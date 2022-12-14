import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../images/profile-pic.jpg';

function Welcome(props) {
	return (
		<div>
			<style>
				{'button { color: white; border: solid 3px white; }'}
				{'button:hover { color: black; background: white; }'}
				{'body { background-color: RGB(0, 0, 0); color: white; }'}
				{'.contact { display: none; }'}
				{'.nav-bar { display: none; }'}
			</style>
			<h1 className='welcome-msg'>
				Hello, <br /> Bonjour, <br /> <span className='japan'>こんにちは!</span>
			</h1>
			<h1>My name is Trey. I am a web-developer and software engineer.</h1>
			<div>
				<Link to='/works'>
					<button className='enter speech'>Check out some of my work!</button>
				</Link>
				<img className='profile-pic main' src={ProfilePic} alt='profile-pic' />
			</div>
		</div>
	);
}

export default Welcome;
