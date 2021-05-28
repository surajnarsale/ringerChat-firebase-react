import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Chatbar.css';
import db from '../../firebase';

function Chatbar({ id, name }) {
	const [seed, setSeed] = useState('');
	const [messages, setMessages] = useState('');

	useEffect(() => {
		if (id) {
			db.collection('rooms')
				.doc(id)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
	}, []);

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 4000));
	}, []);

	const url = `https://avatars.dicebear.com/api/human/${seed}.svg`;

	return (
		<Link to={`/rooms/${id}`}>
			<div className="chatbar">
				<Avatar className="chatbar-avatar" src={url} />
				<div className="chatbar-info">
					<h4>{name}</h4>
					<p>{messages[0]?.message}</p>
				</div>
				<div className="chatbar-time">
					<p>02:50</p>
				</div>
			</div>
		</Link>
	);
}

export default Chatbar;
