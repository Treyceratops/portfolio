import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../images/profile-pic.jpg';
import 'animate.css';

function Welcome(props) {
	return (
		<div className='welcome-page'>
			<style>
				{'button { color: white; border: solid 3px white; }'}
				{'button:hover { color: black; background: white; }'}
				{'body { background-color: RGB(0, 0, 0); color: white; }'}
				{'.contact { display: none; }'}
				{'.nav-bar { display: none; }'}
			</style>
			<div className='welcome-text'>
				<h1>
					Hello, <br /> Bonjour, <br />{' '}
					<span className='japan'>こんにちは!</span>
				</h1>
				<h1>
					My name is <span className='first'>T</span>rey. I am a web-developer
					and software engineer.
				</h1>
			</div>
			<div>
				<Link
					className='welcome-button animate__animated animate__flipInX'
					to='/works'>
					<button className='enter speech'>Check out more of my work!</button>
				</Link>
				<img className='welcome-pic' src={ProfilePic} alt='profile-pic' />
			</div>
		</div>
	);
}

export default Welcome;
