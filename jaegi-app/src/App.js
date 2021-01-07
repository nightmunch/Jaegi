import "./App.css";
import Sidebar from "./Components/sidebar";
import Examination from "./Components/examination";

// import {useState, useEffect} from "react";
// import axios from "axios";

function App() {
	// const [posts, setPosts] = useState([])

	// useEffect(()=>{
	//   axios.get("/api")
	//   .then(res=>{
	//     const newPosts = res.data
	//     setPosts(newPosts)
	//     console.log(newPosts)
	//   })
	// }, [])

	return (
		<div class="flex mobile">
			<Sidebar />
			<Examination />
		</div>
	);
}

export default App;
