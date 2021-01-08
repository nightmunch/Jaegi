import React, { useState } from "react";
import axios from "axios";

function Sapsform(props) {
	const [ic, setIC] = useState("");
	const [year, setYear] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (ic.toString().length === 12) {
			axios.get(`/api/saps/${ic}/${year}`).then((response) => {
				if (response.data !== "Not Found") {
					props.data(response.data);
					props.loading(false);
					props.choosen("");
				} else {
					alert(response.data);
				}
			});
		} else {
			alert("Insert the correct IC format");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>{props.title}</h1>
				<label>
					IC:
					<input
						type="text"
						name="ic"
						value={ic}
						placeholder="980327XXXXXX"
						onChange={(e) => {
							setIC(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Year:
					<input
						type="text"
						name="year"
						value={year}
						placeholder="2011"
						onChange={(e) => {
							setYear(e.target.value);
						}}
					/>
				</label>
				<br />
				<input
					type="submit"
					value="Submit"
					className="border-transparent jaegiyellow px-2"
				/>
			</form>
		</div>
	);
}

export default Sapsform;
