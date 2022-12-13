import React from 'react';
import Mustache from '../images/mustache-icon.jpeg';

function AboutMe(props) {
	return (
		<div className='main'>
			<img className='page-logo' src={Mustache} alt='About' />
			<h3>Career</h3>
			<p>
				<span>Present:</span> I am a Full-Stack Software Engineer and currently
				practicing languages and technologies such as JavaScript, HTML, CSS,
				MERN Stack, Python and Django.
			</p>
			<p>
				<span>Past:</span> My professional experience has been in a broad
				variety of customer-facing and people management roles in the services
				industry, which has enabled me to improve my ability to delight a highly
				diverse customer base and lead a team in a complex, fast-paced
				environment.
			</p>
			<p>
				<span>Future:</span> I am looking to combine strong people skills with
				strong technical skills in a software engineering role on a team that
				delivers high impact within an organization that is creating value and
				positive change.
			</p>
			<hr />
			<h3>Fun Stuff</h3>
			<p>
				When I am not focusing on engineering... I enjoy traveling, studying
				languages, cooking, scuba diving, and playing video games.
			</p>
			<p>
				<span>Currently watching:</span> Wednesday, What We do in the Shadows,
				Avatar
				<br />
				<span>Currently listening to:</span> Rüfüs Du Sol, ODESZA, Disclosure
				<br />
				<span>Currently playing:</span> God Of War: Ragnarök, Slay the Spire,
				Hades
			</p>
		</div>
	);
}

export default AboutMe;
