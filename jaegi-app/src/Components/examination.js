import axios from "axios";
import Marks from "./marks";
import Sapsbar from "./sapsbar";

import React, { useState, useEffect } from "react";

function Examination() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState();
	const ic = 980327105821;

	useEffect(() => {
		axios.get(`/api/test/${ic}`).then((response) => {
			console.log(response.data);
			setData(response.data);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div class="block m-5 md:m-10 font-sf">
			<div class="">
				<h1 class="text-2xl">Examination Result</h1>
				<h1 class="text-sm text-gray-400 mb-5">
					Keep track of their academic performance
				</h1>
			</div>
			<div class="shadow-md flex-initial bg-white ">
				<div class="flex overflow-x-scroll md:overflow-auto">
					<p class="tab ">Child 1</p>
					<p class="tab-active ">Child 2</p>
					<p class="tab ">Child 3</p>
					<p class="tab ">Child 4</p>
					<p class="tab ">Child 5</p>
					<p class="tab ">Child 6</p>
					<p class="tab flex-auto"></p>
				</div>
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
