import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
	const [{}, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<>
			<div className="container">
				<div className="login__container">
					<label className="login-username">Username</label>
					<input type="text" placeholder="Enter email" />
					<label className="login-password">Password</label>
					<input type="text" placeholder="Enter Password" />
					<button>Sign in</button>
					<button onClick={signIn}>Sign up with google</button>
				</div>
			</div>
		</>
	);
}

export default Login;
