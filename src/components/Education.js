import React from 'react';
import Graduation from '../images/education-icon.jpeg';

function Education(props) {
	return (
		<div className='main'>
			<img className='page-logo' src={Graduation} alt='Education' />
			<h3>General Assembly — Software-Engineering Immersive</h3>
			<h5>may 2022 - nov 2022</h5>
			<p>
				▪️ Completed 18 weeks/725+ hours of intensive Full Stack Development
				instruction Built client-side applications with responsive behavior
				using Javascript, Python, HTML, CSS, jQuery, Bootstrap, Express.js,
				Django, Mongoose ODM, MongoDB, React.js, Node.js Developed 5 full-stack
				web applications in four day sprints independently and collaboratively.
				Utilized Git for version control Built RESTful APIs to store data for
				web-apps using Express with MongoDB & MongooseJS ODM
			</p>
			<hr />
			<h3>Académie des Langues</h3>
			<p>▪️ Advanced French Language Certification</p>
			<hr />
			<h3>Las Vegas/Seattle Nihongo Gakuen</h3>
			<p>▪️ Intermediate (L300) Japanese Language Certification</p>
		</div>
	);
}

export default Education;
