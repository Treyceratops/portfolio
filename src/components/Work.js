import React from 'react';

function MyWork(props) {
	return (
		<div>
			{/* Programming Languages w/ icons?, Projects/Links, Github Link w/icon */}
			<h1>Works</h1>
			<h3>Programming Languages/Technologies</h3>
			<ul>
				<li>JavaScript</li>
				<li>React</li>
				<li>Express</li>
				<li>MongoDB</li>
				<li>Mongoose ODM</li>
				<li>Git/Github</li>
				<li>Django</li>
				<li>Python</li>
			</ul>
			<h3>Projects</h3>
			<p>
				<span>Pochi-Japan: </span>
				<br />
				- Worked collaboratively to create a “travel” application with both
				English and Japanese localizations
				<br />- Implemented user authentication and authorization with
				Passport.js
			</p>
			<a target='_blank' href='https://pochi-japan.netlify.app/'>
				<button>Pochi-Japan</button>
			</a>
			<p>
				<span>Cart-Start: </span>
				<br />
				- Led a team of 4 in collaboration on a full-stack web application
				<br />- Coordinated an agile development approach, incorporating Notion
				as a planning board and progress tracker
				<br />
				- Created our own JSON API to perform CRUD with data
				<br />- Deployed through netlify (front-end) and heroku (back-end) to
				the web and for maintenance
			</p>
			<a target='_blank' href='https://cart-start.netlify.app/'>
				<button>Cart-Start</button>
			</a>
			<p>
				<span>Marvel-Pedia: </span>
				<br />
				- Created a front-end interactive react application with a design focus
				<br />- Utilized a third-party API to display and organize data
				<br />
				- Incorporated react router to navigate data through multiple components
				<br />- Used github for version control and to adequately document
			</p>
			<a target='_blank' href='https://marvel-pedia.netlify.app/'>
				<button>Marvel-pedia</button>
			</a>
			<p>
				<span>Java-Script Quiz: </span>
				<br />- Constructed an educational Javascript front-end application
			</p>
			<a target='_blank' href='https://sparkling-paprenjak-a9dd38.netlify.app/'>
				<button>JavaScript Quiz</button>
			</a>
			<h3>Currently Working On</h3>
			<p>- A web-based pet simulation game created with Django/Python.</p>
		</div>
	);
}

export default MyWork;
