import React, { Fragment, FragmentuseEffect, useEffect, useState } from 'react';
import { getMarsPhoto } from './services';
import Nav from './Nav';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Mars = () => {
	const [ data, setData ] = useState({
		flag: true,
		photos: []
	});

	const { flag, photos } = data;

	useEffect(() => {
		getMarsPhoto().then((res) => {
			setData({
				...data,
				flag: false,
				photos: res.data.photos
			});
			console.log(res.data.photos);
		});
		getMarsPhoto();
	});

	return (
		<Fragment>
			<div>
				<Nav />
			</div>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 style={{ textAlign: 'center' }} className="display-4">
							NASA Mars Rover Photos
						</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
				{flag ? null : (
					<Carousel autoPlay>
						{photos.map((ph) => {
							return (
								<div>
									<img src={ph.img_src} key={ph.id} />
									<p className="legend">Mars Rover Camera: {ph.camera.full_name}</p>
								</div>
							);
						})}
					</Carousel>
				)}
			</div>
		</Fragment>
	);
};

export default Mars;
