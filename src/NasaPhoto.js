import React, { useState, useEffect } from 'react';
import { getDayFoto } from './services';
import Nav from './Nav';
import nasa from './nasa.jpg';

const NasaPhoto = () => {
	const [ img, setImg ] = useState([]);

	useEffect(() => {
		getDayFoto().then((res) => {
			setImg(res.data);
		});
	});
	return (
		<div
			style={{
				backgroundImage: `url(${nasa})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
				width: '100vw',
				height: '100vh'
			}}
		>
			<Nav />

			<div className="photo">
				<img src={img.url} alt={img.title} className="img" />
				<div>
					<h1>{img.title}</h1>
					<p className="date">{img.date}</p>
					<p className="copyrig">©{img.copyright}</p>
					<p className="explanation">{img.explanation}</p>
				</div>
			</div>
		</div>
	);
};

export default NasaPhoto;
