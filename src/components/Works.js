import React from 'react';
import LightBulb from '../images/Light-bulb-and-Gear-Icon.png';
import JavaScriptIcon from '../images/html-js-css-icon.jpeg';
import ReactIcon from '../images/react-icon.png';
import ExpressIcon from '../images/nodejs-icon.png';
import MongoIcon from '../images/mongo-icon.png';
import GitHubIcon from '../images/github-icon.png';
import DjangoIcon from '../images/django-icon.png';
import PythonIcon from '../images/python-icon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Works(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='main'>
			<style>{'.works { background: black; color: white; }'}</style>
			<h1>Works</h1>
			<img className='page-logo' src={LightBulb} alt='Works' />
			<h3>Programming Languages & Technologies</h3>
			<div className='tech-icons'>
				<div className='tech-icon'>
					<img
						className='tech-icon'
						src={JavaScriptIcon}
						alt='HTML/CSS/JavaScript'
					/>
					<h6>HTML/CSS/JavaScript</h6>
				</div>
				<div className='tech-icon'>
					<img className='tech-icon' src={ReactIcon} alt='React' />
					<h6>React</h6>
				</div>
				<div className='tech-icon'>
					<img className='tech-icon' src={ExpressIcon} alt='Express/Node.js' />
					<h6>Express/Node.js</h6>
				</div>
				<div className='tech-icon'>
					<img
						className='tech-icon'
						src={MongoIcon}
						alt='MongoDB/MongooseODM'
					/>
					<h6>MongoDB/MongooseODM</h6>
				</div>
				<div className='tech-icon'>
					<img className='tech-icon' src={GitHubIcon} alt='Git/Github' />
					<h6>Git/Github</h6>
				</div>
				<div className='tech-icon'>
					<img className='tech-icon' src={DjangoIcon} alt='Django' />
					<h6>Django</h6>
				</div>
				<div className='tech-icon'>
					<img className='tech-icon' src={PythonIcon} alt='Python' />
					<h6>Python</h6>
				</div>
			</div>
			<hr />
			<h3>Currently Working On</h3>
			<div className='projects'>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>C</span>racking the Coding Interview{' '}
					</h4>
					<ul>
						<li>
							Studying "Cracking the Coding Interview" by Gayle Laakmann
							McDowell
						</li>
					</ul>
					<a
						target='_blank'
						href='https://www.notion.so/Algorithms-cb5591ef04b945158dcd7e9c9cccc527'>
						<button>"Cracking the Coding Interview" Study Board</button>
					</a>
				</div>
				{/* <div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>M</span>asagotchi:{' '}
					</h4>
					<ul>
						<li>
							A web-based aquatic pet simulation game created with JavaScript
						</li>
					</ul>
					<a
						target='_blank'
						href='https://www.notion.so/344594c0bc1b4b3caf455bb240bf0e56?v=a0194ab598bf4e839f504f5e27ac7187'>
						<button>Masagotchi Planning Board</button>
					</a>
				</div> */}
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>T</span>owers Property Renovation:{' '}
					</h4>
					<ul>
						<li>A family business website in an early stage of development</li>
					</ul>
					<a
						target='_blank'
						href='https://towerspropertyrenovation.netlify.app/'>
						<button>Towers Property Renovation</button>
					</a>
				</div>
			</div>
			<hr />
			<h3>Projects</h3>
			<div className='projects'>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>S</span>asso Inc.
					</h4>
					<ul>
						<li>A website for a property renovation business</li>
					</ul>
					<a target='_blank' href='https://sassoinc.com/'>
						<button>Sasso Inc.</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>C</span>aterpillar{' '}
					</h4>
					<ul>
						<li>Constructed a Javascript front-end game using Canvas</li>
						<li>Implemented swipe gestures for mobile</li>
						<li>Added sound effects</li>
						<li>
							Creating an AI "Auto-Play" mode where the computer plays the game
							itself
						</li>
					</ul>
					<a target='_blank' href='https://retro-caterpillar.netlify.app/'>
						<button>Caterpillar</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>P</span>ochi-Japan:{' '}
					</h4>
					<ul>
						<li>
							Worked collaboratively to create a “travel” application with both
							English and Japanese localizations
						</li>
						<li>
							Implemented user authentication and authorization with Passport.js
						</li>
					</ul>
					<a target='_blank' href='https://pochi-japan.netlify.app/'>
						<button>Pochi-Japan</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>C</span>art-Start:{' '}
					</h4>
					<ul>
						<li>
							Led a team of 4 in collaboration on a full-stack web application
						</li>
						<li>
							Coordinated an agile development approach, incorporating Notion as
							a planning board and progress tracker
						</li>
						<li>Created our own JSON API to perform CRUD with data</li>
						<li>
							Deployed through netlify (front-end) and heroku (back-end)to the
							web and for maintenance
						</li>
					</ul>
					<a target='_blank' href='https://cart-start.netlify.app/'>
						<button>Cart-Start</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>M</span>arvel-Pedia:{' '}
					</h4>
					<ul>
						<li>
							Created a front-end interactive react application with a design
							focus
						</li>
						<li>Utilized a third-party API to display and organize data</li>
						<li>
							Incorporated react router to navigate data through multiple
							components
						</li>
						<li>Used github for version control and to adequately document</li>
					</ul>
					<a target='_blank' href='https://marvel-pedia.netlify.app/'>
						<button>Marvel-pedia</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>J</span>avaScript Quiz:{' '}
					</h4>
					<ul>
						<li>Constructed an educational Javascript front-end application</li>
						<li>
							Focused on edge cases and usability/visual appeal while
							implementing animation
						</li>
					</ul>
					<a
						target='_blank'
						href='https://sparkling-paprenjak-a9dd38.netlify.app/'>
						<button>JavaScript Quiz</button>
					</a>
				</div>
				<div data-aos='fade-right' className='project pad'>
					<h4>
						<span className='first big'>F</span>leur de Word:{' '}
					</h4>
					<ul>
						<li>
							Explored vanilla JavaScript functionality through a word guessing
							game
						</li>
					</ul>
					<a
						target='_blank'
						href='https://treyceratops.github.io/fleur-de-word/'>
						<button>Fleur de Word</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Works;
