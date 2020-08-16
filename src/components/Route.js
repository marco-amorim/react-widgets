import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Route = ({ path, children }) => {
	const [currentPath, setcurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setcurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	return currentPath === path ? children : null;
};

export default Route;
