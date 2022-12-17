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
			<h3>Currently Working On</h3>
			<div className='projects'>
				<div className='project'>
					<h4>
						<span className='first big'>M</span>asagotchi:{' '}
					</h4>
					<ul>
						<li className='bullets'>
							A web-based aquatic pet simulation game created with JavaScript
						</li>
					</ul>
					<a
						target='_blank'
						href='https://www.notion.so/344594c0bc1b4b3caf455bb240bf0e56?v=a0194ab598bf4e839f504f5e27ac7187'>
						<button>Masagotchi Planning Board</button>
					</a>
				</div>
			</div>
			<hr />
			<h3>Projects</h3>
			<div className='projects'>
				<div className='project'>
					<h4>
						<span className='first big'>P</span>ochi-Japan:{' '}
					</h4>
					<ul>
						<li className='bullets'>
							Worked collaboratively to create a “travel” application with both
							English and Japanese localizations
						</li>
						<li className='bullets'>
							Implemented user authentication and authorization with Passport.js
						</li>
					</ul>
					<a target='_blank' href='https://pochi-japan.netlify.app/'>
						<button>Pochi-Japan</button>
					</a>
				</div>
				<div className='project'>
					<h4>
						<span className='first big'>C</span>art-Start:{' '}
					</h4>
					<ul>
						<li className='bullets'>
							Led a team of 4 in collaboration on a full-stack web application
						</li>
						<li className='bullets'>
							Coordinated an agile development approach, incorporating Notion as
							a planning board and progress tracker
						</li>
						<li className='bullets'>
							Created our own JSON API to perform CRUD with data
						</li>
						<li className='bullets'>
							Deployed through netlify (front-end) and heroku (back-end)to the
							web and for maintenance
						</li>
					</ul>
					<a target='_blank' href='https://cart-start.netlify.app/'>
						<button>Cart-Start</button>
					</a>
				</div>
				<div className='project'>
					<h4>
						<span className='first big'>M</span>arvel-Pedia:{' '}
					</h4>
					<ul>
						<li className='bullets'>
							Created a front-end interactive react application with a design
							focus
						</li>
						<li className='bullets'>
							Utilized a third-party API to display and organize data
						</li>
						<li className='bullets'>
							Incorporated react router to navigate data through multiple
							components
						</li>
						<li className='bullets'>
							Used github for version control and to adequately document
						</li>
					</ul>
					<a target='_blank' href='https://marvel-pedia.netlify.app/'>
						<button>Marvel-pedia</button>
					</a>
				</div>
				<div className='project'>
					<h4>
						<span className='first big'>J</span>avaScript Quiz:{' '}
					</h4>
					<ul>
						<li className='bullets'>
							Constructed an educational Javascript front-end application
						</li>
						<li className='bullets'>
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
		</div>
	);
}

export default Works;
