import React, { useEffect, useState } from 'react';
import { getDayFoto, spaceNews } from './services';
import { StaticRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NasaPhoto from './NasaPhoto';
import Nav from './Nav';
import Hubble from './Hubble';
import Space from './Space';
import nasa from './nasa.jpg';

import Signin from './Signin';
import Contact from './Contact';

import Mars from './Mars';

const App = ({ users }) => {
	const [ user, setUser ] = useState(null);
	return (
		<BrowserRouter>
			<div
				className="main-div"
				style={{
					backgroundImage: `url(${nasa})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat',
					width: '100vw',
					height: '100vh'
				}}
			>
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={NasaPhoto} path="/nasaphoto" exact />
					<Route component={Space} path="/spacenews" exact />
					<Route component={Hubble} path="/hubble" exact />

					<Route path="/signin" exact>
						<Signin setUser={setUser} users={users} />
					</Route>
					<Route component={Mars} path="/mars" exact />
					<Route path="/contact">{user ? <Contact /> : <Redirect to="/signin" exact />}</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
