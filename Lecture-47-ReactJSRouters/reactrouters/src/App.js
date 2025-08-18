import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contect from "./components/Contect";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./components/Courses";
import Cpp from "./components/Courses/Cpp";
import Java from "./components/Courses/Java";
import Python from "./components/Courses/Python";
import Error from "./components/Error";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contect/:name" element={<Contect />} />
				<Route path="/courses" element={<Courses />} >
					<Route index element={<Python />} />
					<Route path="cpp" element={<Cpp />} />
					<Route path="java" element={<Java />} />
					<Route path="python" element={<Python />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
