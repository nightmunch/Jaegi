import React from "react";

function Marks(props) {
	const handleClick = (e) => {
		props.onClick(props.subject);
	};

	return (
		<div className="my-5 mx-2 flex" onClick={handleClick}>
			<span
				className={`dot mt-1 mr-3 flex-none" ${
					props.subject === props.choosen ? "jaegilightblue" : "jaegilightgrey"
				}`}
			></span>
			<div className="">
				<p className="text-sm">{props.subject}</p>
				<div className="text-4xl">
					<p className="inline-block mr-3">{props.marks}%</p>
					<p className="inline-block ">{props.grade}</p>
				</div>
			</div>
		</div>
	);
}

export default Marks;
