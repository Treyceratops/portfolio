import React from 'react';
import Graduation from '../images/education-icon.jpeg';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function Education(props) {
	// useEffect(() => {
	// 	Aos.init({ duration: 2000 });
	// }, []);
	return (
		<div className='main'>
			<style>{'.education { background: black; color: white; }'}</style>
			<img className='page-logo' src={Graduation} alt='Education' />
			<div className='projects'>
				<div
					// data-aos='fade-right'
					className='project pad'>
					<h4>
						<span className='first big'>G</span>eneral Assembly —
						Software-Engineering Immersive
					</h4>
					<h5>may 2022 - nov 2022</h5>
					<ul>
						<li>
							Completed 18 weeks/725+ hours of intensive Full Stack Development
							instruction
						</li>
						<li>
							Developed 5 full-stack web applications in four day sprints,
							independently and collaboratively
						</li>
						<li>Utilized Git for version control</li>
						<li>
							Built client-side applications with responsive behavior using
							Javascript, HTML, CSS, React.js, Node.js, jQuery, Bootstrap,
							Python, Django
						</li>
						<li>
							Built RESTful APIs to store data for web-apps using Express.js
							with MongoDB & Mongoose ODM
						</li>
					</ul>
				</div>
				<div
					// data-aos='fade-right'
					className='project pad'>
					<h4>
						<span className='first big'>A</span>cadémie des Langues
					</h4>
					<h5>paris, fr</h5>
					<ul>
						<li>
							Advanced French Language Certification: reading, writing, speaking
							proficiency
						</li>
					</ul>
				</div>
				<div
					// data-aos='fade-right'
					className='project pad'>
					<h4>
						<span className='first big'>N</span>ihongo Gakuen
					</h4>
					<h5>las vegas/seattle</h5>
					<ul>
						<li>
							Intermediate (L300) Japanese Language Certification: reading,
							writing, speaking proficiency
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Education;
