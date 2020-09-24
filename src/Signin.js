import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import Nav from './Nav';

const Signin = ({ setUser }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();

	return (
		<div>
			<Nav />

			<h2 style={{ color: 'white', textAlign: 'center' }}>Sign In</h2>
			<div className="wrapper">
				<div className="form-wrapper">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setUser(username);
							history.push('/signin');
						}}
					>
						<div className="username">
							<input
								className="input"
								type="text"
								placeholder="Input Username"
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							/>
						</div>
						<div className="password">
							<input
								className="input"
								type="password"
								placeholder="Input Password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className="button">
							<input className="buttonEl" type="submit" value="Sign In" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signin;
