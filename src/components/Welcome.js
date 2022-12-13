import React from 'react';
import ProfilePic from '../images/profile-pic.jpg';

function Welcome(props) {
	return (
		<div className='main'>
			<style>
				{'button { color: white; border: solid 3px white; }'}
				{'button:hover { color: black; background: white; }'}
				{'body { background-color: RGB(0, 0, 0); color: white; }'}
				{'.contact { display: none; }'}
			</style>
			<img className='profile-pic main' src={ProfilePic} alt='profile-pic' />
			<h1>Welcome, encourage to connect</h1>
		</div>
	);
}

export default Welcome;
