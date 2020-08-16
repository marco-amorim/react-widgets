import React, { useState } from 'react';
// eslint-disable-next-line
import Accordion from './components/Accordion';
// eslint-disable-next-line
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import './styles/index.css';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
		label: 'The Color Black',
		value: 'black',
	},
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>

			<Route path="/list">
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					title="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>

			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
