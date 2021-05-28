import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Groups from './components/groups/Groups';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<section className="entire__app">
			{!user ? (
				<Login />
			) : (
				<Router>
					<Sidebar className="sidebar" />
					<Groups className="groups" />
					<Switch>
						<Route path="/rooms/:roomId">
							<Chat className="chat" />
						</Route>
						<Route path="/">
							<Chat className="chat" />
						</Route>
					</Switch>
				</Router>
			)}
		</section>
	);
}

export default App;
