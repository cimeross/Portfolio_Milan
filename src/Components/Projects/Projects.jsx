import React from "react";
import "./projects.scss";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import img from "../../assets/movie_app.png";
import img1 from "../../assets/gpt3.png";
import img2 from "../../assets/beast-gym.png";
import img3 from "../../assets/space-tourism.png";
import img4 from "../../assets/bear-beer.png";
import img5 from "../../assets/designer_portfolio.png";
import img6 from "../../assets/horizon.png";
import img7 from "../../assets/music-quiz.png";

const data = [
	{
		id: 1,
		image: img4,
		liveLink: "https://bear-beer.netlify.app/",
		github: "https://github.com/cimeross/Bear-Beer-App",
		title: "Bear Beer",
		desc: "Bear Beer is an online beer delivery application created using React.js and Tailwind CSS. The app features a variety of beers, which are stored on Firebase servers. Users can add selected beers to their cart but must log in to place an order, which is facilitated by Google Auth and Firebase. App also includes an admin feature. When logged in as an admin, the user can upload or delete beer items from the app. This provides a convenient way for the admin to manage the beer inventory and ensure that only the desired selection of beers is available to users. ",
		tech1: "React.js",
		tech2: "Tailwind CSS",
		tech3: "Firebase",
	},
	{
		id: 2,
		image: img6,
		liveLink: "https://horizon-properties.netlify.app/",
		github: "https://github.com/cimeross/Realtor-App",
		title: "The Realtor App",
		desc: "The Realtor App is a web application developed with React.js, Tailwind CSS, and Firebase, focusing on seamless management and listing of real estate properties for rental or sale. It offers a modern interface with user authentication, data storage, React Router for smooth navigation, and React Toastify for customizable feedback. Users can create, edit, and delete listings, manage property details, images, pricing.",
		tech1: "React.js",
		tech2: "Tailwind CSS",
		tech3: "Firebase",
	},
	{
		id: 3,
		image: img1,
		liveLink: "https://gpt3-ms.netlify.app/",
		github: "https://github.com/cimeross/GPT-MS",
		title: "GPT3 OpenAi",
		desc: "The landing page built using React, CSS, HTML, and JavaScript. Fully responsive and designed to look great on all devices, including desktops, laptops tablets, and smartphones.",
		tech1: "React.js",
		tech2: "CSS3",
	},
	{
		id: 4,
		image: img2,
		liveLink: "https://beast-gym-ms.netlify.app/",
		github: "https://github.com/cimeross/beast-gym/tree/main",
		title: "Beast Gym",
		desc: "A fully responsive website for a gym, utilizing semantic HTML5, CSS, and JavaScript. In addition, I designed a custom logo using Adobe Illustrator that reflects the gym's brand and values.",
		tech1: "HTML5",
		tech2: "CSS3",
		tech3: "JavaScript",
	},
	{
		id: 5,
		image: img3,
		liveLink: "https://space-tourism-ms.netlify.app/",
		github: "https://github.com/cimeross/Space-Tourism",
		title: "Space Tourism",
		desc: "Space Tourism is a multipage website built using React.js and SCSS, which provides an immersive experience of space exploration. The website has been designed to cater to space enthusiasts, featuring engaging content such as space facts, images, and news. The website also utilizes React Router, which allows for seamless navigation across the various pages. ",
		tech1: "React.js",
		tech2: "SCSS",
	},
	{
		id: 6,
		image: img,
		liveLink: "https://ms-movie-app-react.netlify.app/",
		github: "https://github.com/cimeross/Movie_App",
		title: "Movie Search App",
		desc: "The Movie Search App is a web application developed using React, Redux, Axios for API calls, React Router DOM, and SCSS. The primary objective of this application is to enable users to search for movies and view the details of a selected movie.",
		tech1: "React.js",
		tech2: "SCSS",
	},

	{
		id: 7,
		image: img5,
		liveLink: "https://jelena-suvajac.netlify.app/",
		github: "https://github.com/cimeross/designer-portfolio",
		title: "Graphic & UX/UI Designer - Portfolio",
		desc: "The Graphic & UX/UI Designer Portfolio project is a website created using React.js and SCSS, with email.js service integration. I used my own portfolio website as an example and guidance for it. It's fully responsive, ensuring it can be accessed on any device. The website's design is sleek and modern, with a user-friendly interface that allows for easy navigation through the various projects displayed. The portfolio also includes a contact page, allowing visitors to reach out for potential collaborations.",
		tech1: "React.js",
		tech2: "SCSS",
	},
	{
		id: 8,
		image: img7,
		liveLink: "https://musicquiz-ms.netlify.app/",
		github: "https://github.com/cimeross/Music-Quiz-App",
		title: "Music Quiz",
		desc: "Music Quiz is an interactive web application designed to test your knowledge and passion for music. Created using React.ts, styled components, CSS, and API calls, this project offers users an exciting opportunity to challenge themselves and explore various music genres.",
		tech1: "React.ts",
		tech2: "CSS",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="projects container section">
			<div className="sectionTitle">
				<span className="titleNumber">03.</span>
				<h5 className="titleText">
					Projects
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>

			<div className="projectContainer grid">
				{data.map(
					({
						id,
						github,
						title,
						image,
						liveLink,
						desc,
						tech1,
						tech2,
						tech3,
						tech4,
					}) => {
						return (
							<div key={id} className="singleProject">
								<div className="externalLinks flex">
									<div className="netlifyIcon">
										<a href={liveLink} target="_blank">
											<SiNetlify className="icon" />
										</a>
									</div>
									<div className="githubIcon">
										<a href={github} target="_blank">
											<AiFillGithub className="icon" />
										</a>
									</div>
								</div>
								<div className="imgDiv">
									<a href={liveLink} target="_blank">
										<img src={image} alt={title} />
									</a>
								</div>
								<div className="projectTitle">
									<h3>{title}</h3>
								</div>
								<div className="desc">{desc}</div>
								<div className="technologies flex">
									<small>{tech1}</small>
									<small>{tech2}</small>
									<small>{tech3}</small>
									<small>{tech4}</small>
								</div>
							</div>
						);
					}
				)}
			</div>
		</section>
	);
};

export default Projects;
