import React, { useState, useEffect } from 'react';
import './Groups.css';
import Searchbar from '../searchbar/Searchbar';
import { IconButton } from '@material-ui/core/';
import Chatbar from '../chatbar/Chatbar';
import db from '../../firebase';

import { AiOutlineUsergroupAdd } from 'react-icons/ai';

function Groups() {
	const createGroup = () => {
		const groupName = prompt('ENTER GROUP NAME');

		if (groupName) {
			db.collection('rooms').add({
				name: groupName,
			});
		}
	};
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<div className="groups">
			<header className="groups__header">
				<div className="groups__title-wrapper">
					<h3 className="groups__header-title">Groups</h3>
					<span className="groups__header-btn">
						<IconButton size="small" onClick={createGroup}>
							<AiOutlineUsergroupAdd className="groups__header-btn-icon" />
						</IconButton>
					</span>
				</div>
				<Searchbar placeholder="Search groups..." />
			</header>
			<main className="groups__main-wrapper">
				{rooms.map((room) => (
					<Chatbar
						className="groups__main"
						key={room.id}
						id={room.id}
						name={room.data.name}
					/>
				))}
			</main>
		</div>
	);
}

export default Groups;
