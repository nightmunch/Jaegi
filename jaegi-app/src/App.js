import "./App.css";
import Sidebar from "./Components/sidebar";
import Examination from "./Components/examination";

function App() {
	return (
		<div className="flex h-full mobile">
			<Sidebar />
			<Examination />
		</div>
	);
}

export default App;
