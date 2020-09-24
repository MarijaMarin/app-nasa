import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<ul>
				<Link to="/" className="link">
					Home
				</Link>
			</ul>
		</div>
	);
};

export default Nav;
