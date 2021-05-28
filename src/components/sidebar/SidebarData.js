import { MdPersonOutline } from 'react-icons/md';
import { MdChatBubbleOutline } from 'react-icons/md';
import { BiGroup } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { RiSettings3Line } from 'react-icons/ri';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { BiMoon } from 'react-icons/bi';
import { GiStrikingDiamonds } from 'react-icons/gi';
import { IconButton } from '@material-ui/core/';
import { Avatar } from '@material-ui/core';
export const Logo = {
	id: 1,
	icon: (
		<GiStrikingDiamonds
			style={{
				color: '#7269ef',
				width: '45%',
				height: '45%',
				margin: 'auto',
			}}
		/>
	),
};
export const SidebarData1 = [
	{
		id: 1,
		title: 'Person',
		icon: (
			<IconButton>
				<MdPersonOutline
					style={{
						color: '#878a92',
						width: '30px',
						height: '30px',
					}}
				/>
			</IconButton>
		),
		link: '/home',
	},
	{
		id: 2,
		title: 'Chat',
		icon: (
			<IconButton>
				<MdChatBubbleOutline
					style={{
						color: '#878a92',
						width: '30px',
						height: '30px',
					}}
				/>
			</IconButton>
		),
		link: '/chat',
	},
	{
		id: 3,
		title: 'Group',
		icon: (
			<IconButton>
				<BiGroup
					style={{
						color: '#7269ef',
						width: '100%',
						height: '30px',
					}}
				/>
			</IconButton>
		),
		link: '/group',
	},
	{
		id: 4,
		title: 'Contacts',
		icon: (
			<IconButton>
				<RiContactsLine
					style={{
						color: '#878a92',
						width: '30px',
						height: '30px',
					}}
				/>
			</IconButton>
		),
		link: '/contact',
	},
	{
		id: 5,
		title: 'Setting',
		icon: (
			<IconButton>
				<RiSettings3Line
					style={{
						color: '#878a92',
						width: '30px',
						height: '30px',
					}}
				/>
			</IconButton>
		),
		link: '/setting',
	},
];

export const SidebarData2 = [
	{
		id: 1,
		title: 'Language',
		icon: (
			<IconButton>
				<HiOutlineGlobeAlt
					style={{
						color: '#878a92',
						width: '20px',
						height: '20px',
					}}
				/>
			</IconButton>
		),
		link: '/language',
	},
	{
		id: 2,
		title: 'Darkmode',
		icon: (
			<IconButton>
				<BiMoon
					style={{
						color: '#878a92',
						width: '20px',
						height: '20px',
					}}
				/>
			</IconButton>
		),
		link: '/darkmode',
	},
	// {
	// 	id: 3,
	// 	title: 'Profile',
	// 	icon: (
	// 		<IconButton>
	// 			<Avatar
	// 				style={{
	// 					color: '#878a92',
	// 					width: '40px',
	// 					height: '40px',
	// 				}}
	// 			/>
	// 		</IconButton>
	// 	),
	// 	link: '/profile',
	// },
];
