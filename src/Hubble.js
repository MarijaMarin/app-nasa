import React, { useState, useEffect } from 'react';
import { getPlanetNews } from './services';
import { getHubbleNews } from './services';
import Nav from './Nav';

const Hubble = () => {
	const [ news, setNews ] = useState([]);
	useEffect(() => {
		getPlanetNews().then((res) => setNews(res.data));
	});

	return (
		<div>
			<Nav />
			<div>
				<h1>{news.name}</h1>
				<p className="explanation">{news.short_description}</p>
				<div>
					<img src={news.image} alt={news.name} className="img" />
				</div>
			</div>
		</div>
	);
};

export default Hubble;
