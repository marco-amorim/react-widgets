import React from 'react';
// eslint-disable-next-line
import Accordion from './components/Accordion';
// eslint-disable-next-line
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import './styles/index.css';

// eslint-disable-next-line
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

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A Shade of Blue',
		value: 'blue',
	},
];

export default () => {
	return (
		<div>
			{/* <Accordion items={items}></Accordion> */}
			{/* <Search></Search> */}
			<Dropdown options={options} />
		</div>
	);
};
