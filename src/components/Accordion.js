import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		return (
			<React.Fragment key={item.title}>
				<div onClick={() => onTitleClick(index)} className={`title ${activeIndex === index ? "active" : ""}`}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${activeIndex === index ? "active" : ""}`} >
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
