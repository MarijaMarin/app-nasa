import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHubbleNews } from './services';
import nasa from './nasa.jpg';

const Home = () => {
	return (
		<div
			className="divHome"
			style={{
				backgroundImage: `url(${nasa})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
				width: '100vw',
				height: '100vh'
			}}
		>
			<h1 className="paragrafHome">SPACE NEWS</h1>
			<div>
				<Link to="/nasaphoto" className="link">
					NASA photo of the day
				</Link>
			</div>
			<div>
				<Link to="/spacenews" className="link">
					Space News
				</Link>
			</div>
			<div>
				<Link to="/hubble" className="link">
					Hubble News
				</Link>
				<div />
				<div>
					<Link to="/mars" className="link">
						Mars Rover Photo
					</Link>
				</div>

				<div className="signin">
					<Link to="/signin" className="link">
						Sign In
					</Link>
				</div>
				<div className="signin">
					<Link to="/contact" className="link-contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
