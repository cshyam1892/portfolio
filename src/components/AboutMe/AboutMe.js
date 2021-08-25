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
	    Computer science engineer looking for challenging problems to solve. I love to learn, build, and experiment with different web technologies. Spend most of my time looking at the screen :) 
						</p>
						<p>Here are a few technologies I've been working with recently:</p>
						<section className='skills'>
							<ul>
								<li>
									<span>▹</span> JavaScript <span class="es6">(ES6+)</span>
								</li>
								<li>
									<span>▹</span> PHP  
								</li>
								<li>
									<span>▹</span> Laravel 
								</li>
							</ul>
							<ul>
								<li>
									<span>▹</span> MySQL 
								</li>
								<li>
									<span>▹</span> Python 
								</li>
								<li>
									<span>▹</span> Selenium 
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
