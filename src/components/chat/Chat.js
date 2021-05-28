import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import Searchbar from '../searchbar/Searchbar';
import { Avatar } from '@material-ui/core';
import { RiSearchLine, RiPhoneLine } from 'react-icons/ri';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { MdPersonOutline, MdAttachFile } from 'react-icons/md';
import { WiTime4 } from 'react-icons/wi';
import { BiSend } from 'react-icons/bi';
import db from '../../firebase';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';

import {
	HiOutlineDotsHorizontal,
	HiOutlineEmojiHappy,
	HiOutlinePhotograph,
} from 'react-icons/hi';

function Chat() {
	const [seed, setSeed] = useState('');
	const [input, setInput] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState('');
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomName(snapshot.data().name));

			db.collection('rooms')
				.doc(roomId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
	}, [roomId]);

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 4000));
	}, [roomId]);

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(input);
		db.collection('rooms').doc(roomId).collection('messages').add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	const url = `https://avatars.dicebear.com/api/human/${seed}.svg`;
	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__header-left">
					<Avatar className="chat__header-avatar" src={url} />
					<h4>{roomName}</h4>
				</div>
				<div className="chat__header-right">
					<RiSearchLine className="chat__header-search" />
					<RiPhoneLine className="chat__header-call" />
					<AiOutlineVideoCamera className="chat__header-video" />
					<MdPersonOutline className="chat__header-profile" />
					<HiOutlineDotsHorizontal className="chat__header-more" />
				</div>
			</div>
			<div className="chat__body-container">
				<ul className="chat__body">
					{messages.map((message) => (
						<>
							<li className="chat__body-receiver">
								<div className="chat__body-message">
									<div className="chat-avatar">
										<Avatar />
									</div>
									<div className="chat-content">
										<div
											className={`chat-message-container ${
												message.name === user.displayName &&
												'chat__receiver'
											}`}
										>
											<p className="chat-message">
												{message.message}
											</p>
											<p className="chat-time">
												<WiTime4 className="chat__body-clock" />
												<span className="chat__body-time">
													{new Date(
														message.timestamp?.toDate()
													).toUTCString()}
												</span>
											</p>
										</div>
										<div className="chat-name">{message.name}</div>
									</div>
								</div>
							</li>
						</>
					))}
				</ul>
			</div>
			<form className="chat__footer">
				<div className="chat__footer-searchbar">
					<Searchbar
						placeholder="Enter Message..."
						value={input}
						onChangeEvent={(e) => setInput(e.target.value)}
					/>
				</div>
				<div className="chat__footer-iconswrapper">
					<HiOutlineEmojiHappy className="chat__footer-emoji" />
					<MdAttachFile className="chat__footer-attach" />
					<HiOutlinePhotograph className="chat__footer-photos" />
					<button
						type="submit"
						onClick={sendMessage}
						className="chat__footer-send"
					>
						<BiSend />
					</button>
				</div>
			</form>
		</div>
	);
}

export default Chat;
