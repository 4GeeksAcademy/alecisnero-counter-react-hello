import React from "react";
import Counter from './Counter.jsx'
import Counter2 from './Counter2.jsx';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./ SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Counter />

			<SecondsCounter />
		</div>
	);
};

export default Home;
