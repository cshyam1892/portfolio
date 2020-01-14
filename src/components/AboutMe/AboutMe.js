import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>About Me
						</h2>
						<p>
							I'm a 25-year-old computer science engineer, originally from Biratnagar,
							who has a passion for building and experimenting with different
							web technologies. I like to design and build smart, eye-catching
							and pixel-perfect user interfaces with robust functionalities.
						</p>
						<p>
							Shortly after graduating from{' '}
							<a
								href='https://www.giet.ac.in/'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
							  Giet College	
							</a>
							, I worked as an IT Technician
							at{' '}
							<a
								href='http://kshitiz.edu.np/'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
							  Birat Kshitiz College	
							</a>{' '}
							where I worked on fast-paced and diverse team for nearly 2 years on
							a wide palette of frameworks and languages in projects that pushed
							myself on a daily basis.
						</p>
						<p>Here are a few technologies I've been working with recently:</p>
						<section className='skills'>
							<ul>
								<li>
									<span>▹</span> JavaScript <span className='es6'>(ES6+)</span>
								</li>
								<li>
									<span>▹</span> React  
								</li>
								<li>
									<span>▹</span> PHP  
								</li>
							</ul>
							<ul>
								<li>
									<span>▹</span> Node.js
								</li>
								<li>
									<span>▹</span> Laravel 
								</li>
								<li>
									<span>▹</span> MySQL 
								</li>
							</ul>
						</section>
					</section>
					<section>
						<img src={headshot} alt='Headshot of Shyam' />
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
