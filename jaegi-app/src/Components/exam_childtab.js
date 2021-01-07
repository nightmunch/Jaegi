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
		<div class="flex overflow-x-scroll md:overflow-auto">
			<p
				id={1}
				class={active === 1 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 1
			</p>
			<p
				id={2}
				class={active === 2 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 2
			</p>
			<p
				id={3}
				class={active === 3 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 3
			</p>
			<p
				id={4}
				class={active === 4 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 4
			</p>
			<p
				id={5}
				class={active === 5 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 5
			</p>
			<p
				id={6}
				class={active === 6 ? "tab-active" : "tab"}
				onClick={handleClick}
			>
				Child 6
			</p>
			<p class="tab flex-auto"></p>
		</div>
	);
}

export default ExamChildTab;
