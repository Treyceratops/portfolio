import React from 'react';
import Graduation from '../images/education-icon.jpeg';

function Education(props) {
	return (
		<div className='main'>
			<img className='page-logo' src={Graduation} alt='Education' />
			<div className='projects'>
				<div className='project pad'>
					<h4>
						<span className='first big'>G</span>eneral Assembly —
						Software-Engineering Immersive
					</h4>
					<h5>may 2022 - nov 2022</h5>
					<p className='bullets'>
						▪️ Completed 18 weeks/725+ hours of intensive Full Stack Development
						instruction Built client-side applications with responsive behavior
						using Javascript, Python, HTML, CSS, jQuery, Bootstrap, Express.js,
						Django, Mongoose ODM, MongoDB, React.js, Node.js Developed 5
						full-stack web applications in four day sprints independently and
						collaboratively. Utilized Git for version control Built RESTful APIs
						to store data for web-apps using Express with MongoDB & MongooseJS
						ODM
					</p>
				</div>
				<div className='project pad'>
					<h4>
						<span className='first big'>A</span>cadémie des Langues
					</h4>
					<p className='bullets'>
						▪️ Advanced French Language Certification: reading, writing,
						speaking skills
					</p>
				</div>
				<div className='project pad'>
					<h4>
						<span className='first big'>L</span>as Vegas/Seattle Nihongo Gakuen
					</h4>
					<p className='bullets'>
						▪️ Intermediate (L300) Japanese Language Certification: reading,
						writing, speaking skills
					</p>
				</div>
			</div>
		</div>
	);
}

export default Education;
