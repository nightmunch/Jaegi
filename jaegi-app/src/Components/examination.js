import Marks from "./marks";
import Sapsbar from "./sapsbar";
import ExamChildTab from "./exam_childtab";
import Sapsform from "./sapsform";

import React, { useState } from "react";

function Examination() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [choose, setChoose] = useState("choose");

	if (isLoading) {
		return (
			<div className="flex h-screen justify-center items-center w-screen font-sf">
				<Sapsform
					title="Thank you for visiting! :D"
					data={(d) => {
						setData(d);
					}}
					loading={(l) => {
						setLoading(l);
					}}
					choosen={(c) => {
						setChoose(c);
					}}
				/>
			</div>
		);
	}

	return (
		<div className="h-full block m-5 p-2 md:ml-64 md:p-10 font-sf">
			<Sapsform
				data={(d) => {
					setData(d);
				}}
				loading={(l) => {
					setLoading(l);
				}}
				choosen={(c) => {
					setChoose(c);
				}}
			/>
			<div className="">
				<h1 className="text-2xl">Examination Result</h1>
				<h1 className="text-sm text-gray-400 mb-5">
					Keep track of their academic performance
				</h1>
			</div>
			<div className="shadow-md flex-initial bg-white ">
				<ExamChildTab />
				<div className="p-3 md:p-10">
					<div className="shadow-md px-5 py-3">
						<p>Tingkatan: {data.class}</p>
					</div>
					<div className="h-7"></div>
					<div className="shadow-md p-7">
						<p className="text-center text-2xl">{data.results[1].exam}</p>
						<div className="graph pt-5 m-auto md:w-3/5">
							<Sapsbar data={data.results[1].result} choose={choose} />
						</div>
						<div className="flex">
							<div className="m-5 grid sm:grid-cols-2 md:grid-cols-5">
								{data.results[1].result.map(function (d, index) {
									return (
										<Marks
											key={index}
											subject={d.subject}
											marks={d.marks}
											grade={d.grade}
											onClick={(value) => {
												setChoose(value);
											}}
											choosen={choose}
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
