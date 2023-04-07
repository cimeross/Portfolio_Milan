import React from "react";
import "./projects.scss";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import img from "../../assets/movie_app.png";
import img1 from "../../assets/gpt3.png";
import img2 from "../../assets/beast-gym.png";
import img3 from "../../assets/space-tourism.png";

const data = [
	{
		id: 1,
		image: img,
		liveLink: "https://ms-movie-app-react.netlify.app/",
		github: "https://github.com/cimeross/Movie_App",
		title: "Movie App",
		desc: "Movie application that lets you search movies and TV Shows.",
		tech1: "HTML5",
		tech2: "CSS3",
		tech3: "React.js",
	},
	{
		id: 2,
		image: img1,
		liveLink: "https://gpt3-ms.netlify.app/",
		github: "https://github.com/cimeross/GPT-MS",
		title: "GPT3 OpenAi",
		desc: "The landing page built using React, CSS, HTML, and JavaScript. Fully responsive and designed to look great on all devices, including desktops, laptops tablets, and smartphones.",
		tech1: "HTML5",
		tech2: "CSS3",
		tech3: "React.js",
	},
	{
		id: 3,
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
		id: 4,
		image: img3,
		liveLink: "https://space-tourism-ms.netlify.app/",
		github: "https://github.com/cimeross/Space-Tourism",
		title: "Space Tourism",
		desc: "Space Tourism is a multipage website built using React.js and SCSS, which provides an immersive experience of space exploration. The website has been designed to cater to space enthusiasts, featuring engaging content such as space facts, images, and news. The website also utilizes React Router, which allows for seamless navigation across the various pages. ",
		tech1: "HTML5",
		tech2: "SCSS",
		tech3: "React.js",
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
