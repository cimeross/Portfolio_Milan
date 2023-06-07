import "./App.css";
import {
	About,
	Contact,
	Footer,
	Home,
	Navbar,
	Projects,
	Skills,
} from "./Components";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
