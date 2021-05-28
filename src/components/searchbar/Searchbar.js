import React from 'react';
import './Searchbar.css';
import { RiSearchLine } from 'react-icons/ri';

function Searchbar({ placeholder, value, onChangeEvent }) {
	return (
		<div
			className="searchbar"
			style={{
				borderRadius: '.4rem',
			}}
		>
			<RiSearchLine className="searchbar-icon" />
			<input
				type="text"
				className="searchbar-input"
				placeholder={placeholder}
				value={value}
				onChange={onChangeEvent}
			/>
		</div>
	);
}

export default Searchbar;
