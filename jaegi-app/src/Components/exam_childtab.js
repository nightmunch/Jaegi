import React, { useState } from "react";

function ExamChildTab(props) {
	const [active, setActive] = useState(1);
	const handleClick = (e) => {
		const index = parseInt(e.target.id, 0);
		if (index !== active) {
			setActive(index);
		}
		console.log(active);
	};

	return (
		<div className="flex overflow-x-scroll md:overflow-auto">
			<p
				id={1}
				className={active === 1 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 1
			</p>
			<p
				id={2}
				className={active === 2 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 2
			</p>
			<p
				id={3}
				className={active === 3 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 3
			</p>
			<p
				id={4}
				className={active === 4 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 4
			</p>
			<p
				id={5}
				className={active === 5 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 5
			</p>
			<p
				id={6}
				className={active === 6 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 6
			</p>
			<p className="tab flex-auto"></p>
		</div>
	);
}

export default ExamChildTab;
