import React from 'react';
import Mustache from '../images/mustache-icon.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AboutMe(props) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className='main'>
			<style>{'.about { background: black; color: white; }'}</style>
			<h1>About</h1>
			<img className='page-logo' src={Mustache} alt='About' />
			<h3>Career</h3>
			<div data-aos='fade-right' className='project bullets pad'>
				<p>
					<span className='time'>
						<span className='first big'>P</span>resent:
					</span>{' '}
					I am a Full-Stack Software Engineer/Web-Developer and currently
					practicing languages and technologies such as JavaScript, HTML, CSS,
					MERN Stack, Python and Django.
				</p>
				<p>
					<span className='time'>
						<span className='first big'>P</span>ast:
					</span>{' '}
					My professional experience has been in a broad variety of
					customer-facing and people management roles in the services industry,
					which has enabled me to improve my ability to delight a highly diverse
					customer base and lead a team in a complex, fast-paced environment.
				</p>
				<p>
					<span className='time'>
						<span className='first big'>F</span>uture:
					</span>{' '}
					I am looking to combine strong people skills with strong technical
					skills in software engineering/web development roles on a team that
					delivers high impact within an inclusive organization that is creating
					value and positive change.
				</p>
			</div>
			<hr />
			<h3>Fun Stuff</h3>
			<div data-aos='fade-right' className=' project bullets pad'>
				<p>
					When I am not focusing on engineering... I enjoy traveling, studying
					languages, cooking, scuba diving, and playing video games.
				</p>
				<p>
					<span>Currently watching:</span> The Last of Us
					<br />
					<span>Currently listening to:</span> Rüfüs Du Sol, ODESZA, Disclosure
					<br />
					<span>Currently playing:</span> Octopath Travelers 2, Slay the Spire,
					Hades
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
