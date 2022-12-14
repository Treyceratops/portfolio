import React from 'react';
import LightBulb from '../images/Light-bulb-and-Gear-Icon.png';
import JavaScriptIcon from '../images/html-js-css-icon.jpeg';
import ReactIcon from '../images/react-icon.png';
import ExpressIcon from '../images/nodejs-icon.png';
import MongoIcon from '../images/mongo-icon.png';
import GitHubIcon from '../images/github-icon.png';
import DjangoIcon from '../images/django-icon.png';
import PythonIcon from '../images/python-icon.png';

function Works(props) {
	return (
		<div className='main'>
			{/* <h1>Works</h1> */}
			<img className='page-logo' src={LightBulb} alt='Works' />
			<h3>Programming Languages/Technologies</h3>
			<div className='tech-icons'>
				<div>
					<img
						className='tech-icon'
						src={JavaScriptIcon}
						alt='HTML/CSS/JavaScript'
					/>
					<h6>HTML/CSS/JavaScript</h6>
				</div>
				<div>
					<img className='tech-icon' src={ReactIcon} alt='React' />
					<h6>React</h6>
				</div>
				<div>
					<img className='tech-icon' src={ExpressIcon} alt='Express/Node.js' />
					<h6>Express/Node.js</h6>
				</div>
				<div>
					<img
						className='tech-icon'
						src={MongoIcon}
						alt='MongoDB/MongooseODM'
					/>
					<h6>MongoDB/MongooseODM</h6>
				</div>
				<div>
					<img className='tech-icon' src={GitHubIcon} alt='Git/Github' />
					<h6>Git/Github</h6>
				</div>
				<div>
					<img className='tech-icon' src={DjangoIcon} alt='Django' />
					<h6>Django</h6>
				</div>
				<div>
					<img className='tech-icon' src={PythonIcon} alt='Python' />
					<h6>Python</h6>
				</div>
			</div>
			<hr />
			<h3>Projects</h3>
			<div className='projects'>
				<div className='project'>
					<h4>Pochi-Japan: </h4>
					<ul>
						<li className='project-bullets'>
							Worked collaboratively to create a “travel” application with both
							English and Japanese localizations
						</li>
						<li className='project-bullets'>
							Implemented user authentication and authorization with Passport.js
						</li>
					</ul>
					<a target='_blank' href='https://pochi-japan.netlify.app/'>
						<button>Pochi-Japan</button>
					</a>
				</div>
				<div className='project'>
					<h4>Cart-Start: </h4>
					<ul>
						<li className='project-bullets'>
							Led a team of 4 in collaboration on a full-stack web application
						</li>
						<li className='project-bullets'>
							Coordinated an agile development approach, incorporating Notion as
							a planning board and progress tracker
						</li>
						<li className='project-bullets'>
							Created our own JSON API to perform CRUD with data
						</li>
						<li className='project-bullets'>
							Deployed through netlify (front-end) and heroku (back-end)to the
							web and for maintenance
						</li>
					</ul>
					<a target='_blank' href='https://cart-start.netlify.app/'>
						<button>Cart-Start</button>
					</a>
				</div>
				<div className='project'>
					<h4>Marvel-Pedia: </h4>
					<ul>
						<li className='project-bullets'>
							Created a front-end interactive react application with a design
							focus
						</li>
						<li className='project-bullets'>
							Utilized a third-party API to display and organize data
						</li>
						<li className='project-bullets'>
							Incorporated react router to navigate data through multiple
							components
						</li>
						<li className='project-bullets'>
							Used github for version control and to adequately document
						</li>
					</ul>
					<a target='_blank' href='https://marvel-pedia.netlify.app/'>
						<button>Marvel-pedia</button>
					</a>
				</div>
				<div className='project'>
					<h4>Java-Script Quiz: </h4>
					<ul>
						<li className='project-bullets'>
							Constructed an educational Javascript front-end application
						</li>
						<li className='project-bullets'>
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
			</div>
			<hr />
			<h3>Currently Working On</h3>
			<ul>
				<li>A web-based pet simulation game created with Django</li>
			</ul>
		</div>
	);
}

export default Works;
