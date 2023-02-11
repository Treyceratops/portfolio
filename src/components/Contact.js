import React from 'react';
import SideProfile from '../images/side-profile-pic.jpg';
import Email from '../images/email-icon.png';
import Resume from '../images/resume-icon.png';
import LinkedIn from '../images/linkdin-icon.png';
import GitHub from '../images/github-icon-black.png';

function Contact(props) {
	return (
		<div className='contact'>
			<style>{'.contact {margin: 0; height: 100%; overflow: hidden;}'}</style>
			<h2 className='name'>
				<span className='first'>T</span>rey <span className='first'>T</span>
				owers
			</h2>
			<div className='contact-grid'>
				<div className='side-profile'>
					<img src={SideProfile} alt='profile-pic' />
				</div>
				<hr className='hole hole1' />
				<div className='links'>
					<div>
						<img className='contact-icon' src={Email} alt='email' />
						<a href='mailto:treytowers@yahoo.com' subject='HTML link'>
							E-mail
						</a>
					</div>
					<div>
						<img className='contact-icon' src={Resume} alt='resume' />
						<a
							target='_blank'
							href='https://docs.google.com/document/d/17BeFvjRgmOMVnf1XpK-_iB8Pb3fk35oR5ZvWgVABzDY/edit#'>
							Resume
						</a>
					</div>
					<div>
						<img className='contact-icon' src={LinkedIn} alt='linkedin' />
						<a target='_blank' href='https://www.linkedin.com/in/treytowers/'>
							LinkedIn
						</a>
					</div>
					<div>
						<img className='contact-icon github' src={GitHub} alt='github' />
						<a
							className='git-link'
							target='_blank'
							href='https://github.com/Treyceratops'>
							Github
						</a>
					</div>
				</div>
				<hr className='hole hole2' />
			</div>
		</div>
	);
}

export default Contact;
