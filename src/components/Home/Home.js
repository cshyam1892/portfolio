import React from 'react';
import './Home.scss';
import Fade from 'react-reveal/Fade';

const Home = () => {
	return (
		<>
			<Fade cascade delay={600}>
				<section className='title-section'>
					<p className='introduction'>Hello! My name is</p>
					<h1>Shyam Chaudhary.</h1>
					<h1 className='sub-header-title'>Building things for the web.</h1>
					<p className='description-title'>
						I'm a{' '}
						<span>
							<b>Computer Science Engineer</b>
						</span>{' '}
						and Web design enthusiast based in Hamilton, New Zealand(but open to new
						adventures!) My areas of expertise are PHP, JavaScript, Basic UI Design,
	          and Test-Driven Development. CV for New Zealand Jobs: <a target="_blank" href="https://drive.google.com/file/d/12oEqmkMey-zVX1eGB9SST0GV2OrJN9Bv/view?usp=sharing">CV</a>.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<a href='mailto:sam.chaudhary615@protonmail.com' className='button-link'>
								<button className='contact-button'>Get In Touch</button>
							</a>
							<a
								href='https://drive.google.com/file/d/136Ab9eY4VCf10PHNH1uHu4AarhC73LXQ/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
								className='button-link'>
								<button className='contact-button'>Resume</button>
							</a>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;
