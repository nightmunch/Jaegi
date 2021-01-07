import axios from "axios";
import Marks from "./marks";
import Sapsbar from "./sapsbar";
import ExamChildTab from "./exam_childtab";

import React, { useState, useEffect } from "react";

function Examination() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [ic, setIC] = useState(0);

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
			axios.get(`/api/test/${ic}`).then((response) => {
				console.log(response.data);
				setData(response.data);
				setLoading(false);
			});
		} else {
			alert("Insert the correct IC format");
		}
	};

	if (isLoading) {
		return (
			<div class="flex h-screen justify-center items-center w-screen font-sf">
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
					<input
						type="submit"
						value="Submit"
						class="border-transparent bg-transparent"
					/>
				</form>
			</div>
		);
	}

	return (
		<div class="block m-5 md:m-10 font-sf">
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
						<p>Tingkatan: T1 HIDROGEN</p>
					</div>
					<div class="h-7"></div>
					<div class="shadow-md p-7">
						<p class="text-center text-2xl">Peperiksaan Pertengahan Tahun</p>
						<div class="graph pt-5 m-auto w-full md:w-3/5">
							<Sapsbar data={data} />
						</div>
						<div class="flex">
							<div class="m-5 grid sm:grid-cols-2 md:grid-cols-5">
								{data.map(function (d) {
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
