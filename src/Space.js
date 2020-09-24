import React, { useState, useEffect } from 'react';
import { spaceNews } from './services';
import Nav from './Nav';
import nasa from './nasa.jpg';

const Space = () => {
	const [ space, setSpace ] = useState([]);
	const [ link, setLink ] = useState([]);

	useEffect(() => {
		spaceNews().then((res) => {
			setSpace(res.data);
		});
	});
	useEffect(() => {
		spaceNews().then((res) => {
			setLink(res.data.links);
		});
	});
	return (
		<div
			style={{
				backgroundImage: `url(${nasa})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '100%'
			}}
		>
			<Nav />
			<div>
				<h1>Latest Space X Launch: {space.mission_name}</h1>
				<p className="date">{space.launch_date_local}</p>
				<p className="explanation">{space.details}</p>
				<img className="img" src={link.mission_patch} />
				<iframe
					className="video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/_j4xR7LMCGY"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<p className="explanation">Space Video and more</p>
			</div>
		</div>
	);
};

export default Space;
