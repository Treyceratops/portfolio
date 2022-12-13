import React from 'react';
import Mustache from '../images/mustache-icon.jpeg';

function AboutMe(props) {
	return (
		<div className='main'>
			{/* About me: After leaving a
				career in engineering, I decided to dive into the world of data science.
				I recently completed a 13-week data science immersive program focused on
				data science and machine learning modeling and applications. During this
				time, I was exposed to so many interesting ideas and concepts and hope
				to continue building these types of projects in my free time. When I
				am not focusing on data science, I enjoy traveling, hiking, and playing
				soccer. I have played music most of my life and currently make beats in
				my free time. Currently working on: Computer Vision Currently
				listening to: Bambi, Hippo Campus Currently Watching: British Panel
				Shows */}
			{/* <h1>About</h1> */}
			<img className='page-logo' src={Mustache} alt='About' />
			<h3>Career</h3>
			<p>
				<span>Present:</span> I am a Full-Stack Software Engineer and currently
				practicing languages and technologies such as JavaScript, HTML, CSS,
				MERN Stack, Python and Django.
				<p />
				<span>Past:</span> My professional experience has been in a broad
				variety of customer-facing and people management roles in the services
				industry, which has enabled me to improve my ability to delight a highly
				diverse customer base and lead a team in a complex, fast-paced
				environment.
				<p />
				<span>Future:</span> I am looking to combine strong people skills with
				strong technical skills in a software engineering role on a team that
				delivers high impact within an organization that is creating value and
				positive change.
			</p>
			<hr />
			<h3>Fun Stuff</h3>
			<p>
				When I am not focusing on engineering, I enjoy traveling, studying
				language, cooking, and playing video games.
			</p>
			<p>
				<span>Currently watching:</span> Wednesday, What We do in the Shadows,
				Avatar
				<br />
				<span>Currently listening to:</span> Rufus du Sol, ODESZA, Disclosure
				<br />
				<span>Currently playing:</span> God Of War: Ragnarök, Slay the Spire,
				Hades
			</p>
		</div>
	);
}

export default AboutMe;
