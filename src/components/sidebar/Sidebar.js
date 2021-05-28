import './Sidebar.css';
import { SidebarData1, SidebarData2, Logo } from './SidebarData';
import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="sidebar">
			<div className="sidebar__logo">{Logo.icon}</div>
			<div className="sidebar__menu">
				{SidebarData1.map((item, index) => {
					return <span className="sidebar__menu-item">{item.icon}</span>;
				})}
			</div>
			<div className="sidebar__features">
				{SidebarData2.map((item, index) => {
					return (
						<span className="sidebar__features-item">{item.icon}</span>
					);
				})}
				<IconButton>
					<Avatar
						style={{
							color: '#878a92',
							width: '40px',
							height: '40px',
						}}
						src={user?.photoURL}
					/>
				</IconButton>
			</div>
		</div>
	);
}

export default Sidebar;
