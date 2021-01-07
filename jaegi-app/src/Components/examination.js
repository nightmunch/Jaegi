import axios from "axios";
import Marks from "./marks";
import Sapsbar from "./sapsbar";
import ExamChildTab from "./exam_childtab";

import React, { useState, useEffect } from "react";

function Examination() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [ic, setIC] = useState("");
	const [year, setYear] = useState("");

	// useEffect(() => {
	// 	if (ic.toString().length === 12) {
	// 		axios.get(`/api/test/${ic}`).then((response) => {
	// 			console.log(response.data);
	// 			setData(response.data);
	// 			setLoading(false);
	// 		});
	// 	}
	// }, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (ic.toString().length === 12) {
			axios.get(`/api/saps/${ic}/${year}`).then((response) => {
				if (response.data !== "Not Found") {
					console.log(response.data);
					setData(response.data);
					setLoading(false);
				} else {
					alert(response.data);
				}
			});
		} else {
			alert("Insert the correct IC format");
		}
	};

	if (isLoading) {
		return (
			<div class="flex h-screen justify-center items-center w-screen font-sf">
				<form onSubmit={handleSubmit}>
					<h1>Thank you for coming! (PS. Shahrin already asleep!)</h1>
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
						class="border-transparent jaegiyellow px-2"
					/>
				</form>
			</div>
		);
	}

	return (
		<div class="h-full block m-5 p-2 md:ml-64 md:p-10 font-sf">
			<form onSubmit={handleSubmit}>
				<label>
					IC:
					<input
						type="text"
						name="ic"
						value={ic}
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
						onChange={(e) => {
							setYear(e.target.value);
						}}
					/>
				</label>
				<input
					type="submit"
					value="Submit"
					class="border-transparent bg-transparent"
				/>
			</form>
			<div class="">
				<h1 class="text-2xl">Examination Result</h1>
				<h1 class="text-sm text-gray-400 mb-5">
					Keep track of their academic performance
				</h1>
			</div>
			<div class="shadow-md flex-initial bg-white ">
				<ExamChildTab />
				<div class="p-3 md:p-10">
					<div class="shadow-md px-5 py-3">
						<p>Tingkatan: {data.class}</p>
					</div>
					<div class="h-7"></div>
					<div class="shadow-md p-7">
						<p class="text-center text-2xl">{data.results[1].exam}</p>
						<div class="graph pt-5 m-auto md:w-3/5">
							<Sapsbar data={data.results[1].result} />
						</div>
						<div class="flex">
							<div class="m-5 grid sm:grid-cols-2 md:grid-cols-5">
								{data.results[1].result.map(function (d) {
									return (
										<Marks
											subject={d.subject}
											marks={d.marks}
											grade={d.grade}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Examination;
