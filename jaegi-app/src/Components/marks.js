import React, { useState } from "react";

function Marks(props) {
	const handleClick = (e) => {
		props.onClick(props.subject);
	};

	return (
		<div class="my-5 mx-2 flex" onClick={handleClick}>
			<span
				class={`dot mt-1 mr-3 flex-none" ${
					props.subject == props.choosen ? "jaegilightblue" : "jaegilightgrey"
				}`}
			></span>
			<div class="">
				<p class="text-sm">{props.subject}</p>
				<div class="text-4xl">
					<p class="inline-block mr-3">{props.marks}%</p>
					<p class="inline-block ">{props.grade}</p>
				</div>
			</div>
		</div>
	);
}

export default Marks;
