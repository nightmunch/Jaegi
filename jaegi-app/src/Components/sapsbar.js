import React from "react";
import { Bar } from "react-chartjs-2";

function argMax(array) {
	return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
function argMin(array) {
	return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] < r[0] ? a : r))[1];
}

function Sapsbar(props) {
	var subject = [];
	var marks = [];

	for (var x in props.data) {
		subject.push(props.data[x].subject);
		marks.push(parseInt(props.data[x].marks));
	}

	// var marks = [74, 25, 68, 70, 95, 60, 48, 68, 57, 73, 58];
	// other marks color
	var color = marks.map((x) => "rgba(196, 196, 196, 1)");

	color[argMax(marks)] = "rgba(244, 194, 134, 1)";
	color[argMin(marks)] = "rgba(255, 111, 91, 1)";

	return (
		<div>
			<Bar
				height={200}
				width={600}
				data={{
					labels: subject,
					datasets: [
						{
							label: "Marks",
							data: marks,
							backgroundColor: color,
							barPercentage: 0.7,
							// maxBarThickness: 44,
							categoryPercentage: 0.8,
						},
					],
				}}
				options={{
					legend: {
						display: false,
					},
					// responsive: false,
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
									max: 100,
									display: false,
								},
								gridLines: {
									display: false,
								},
							},
						],
						xAxes: [
							{
								ticks: {
									display: false,
								},
								gridLines: {
									display: false,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
}

export default Sapsbar;
