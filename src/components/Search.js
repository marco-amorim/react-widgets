import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});
			setResults(data.query.search);
		};
		search();
	}, [debouncedTerm]);

	/*
		The useEffect below was showing a warning on the console because we used (results.length)
		inside of it, and never passed inside the second argument (array), the problem with adding it
		to the array is that when we first load our application we get a bug, that makes two api requests
		instead of one, the first one happens when we first load the app, and the second after the request,
		because the results.length changes, what ends up triggering the useEffect again,so we get rid of the
		warning but end up creating a bug. The way to solve this is to create a helper State (debounced) and
		use two different useEffects as you can see in the code above
	*/

	// useEffect(() => {
	// 	const search = async () => {
	// 		const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
	// 			params: {
	// 				action: 'query',
	// 				list: 'search',
	// 				origin: '*',
	// 				format: 'json',
	// 				srsearch: term,
	// 			},
	// 		});
	// 		setResults(data.query.search);
	// 	};

	// 	if (term && !results.length) {
	// 		search();
	// 	} else {
	// 		const timeoutId = setTimeout(() => {
	// 			if (term) {
	// 				search();
	// 			}
	// 		}, 1000);

	// 		return () => {
	// 			clearTimeout(timeoutId);
	// 		};
	// 	}
	// }, [term, results.length]);

	const renderedResults = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					{/* dangerouslySetInnerHTML is a "secret" feature in React that can make your
					 app unsafe because it renders HTML from your requests directly into your app! */}
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
