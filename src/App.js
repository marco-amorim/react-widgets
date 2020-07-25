import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import './styles/index.css';

const items = [
	{
		title: 'What is React?',
		content: 'React is a frontend javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among enginners',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

export default () => {
	return (
		<div>
			{/* <Accordion items={items}></Accordion> */}
			<Search></Search>
		</div>
	);
};
