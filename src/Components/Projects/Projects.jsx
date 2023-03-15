import React from "react";
import "./projects.scss";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import img from "../../assets/movie_app.png";

const data = [
	{
		id: 1,
		image: img,
		liveLink: "https://ms-movie-app-react.netlify.app/",
		github: "https://github.com/cimeross/Movie_App",
		title: "Movie App",
		desc: "Movie application that lets you search movies and TV Shows",
		tech1: "Html",
		tech2: "CSS",
		tech3: "JavaScript",
		tech4: "React",
	},
	{
		id: 2,
		image: img,
		liveLink: "https://ms-movie-app-react.netlify.app/",
		github: "https://github.com/cimeross/Movie_App",
		title: "Movie App",
		desc: "Movie application that lets you search movies and TV Shows",
		tech1: "Html",
		tech2: "CSS",
		tech3: "JavaScript",
		tech4: "React",
	},
	{
		id: 3,
		image: img,
		liveLink: "https://ms-movie-app-react.netlify.app/",
		github: "https://github.com/cimeross/Movie_App",
		title: "Movie App",
		desc: "Movie application that lets you search movies and TV Shows",
		tech1: "Html",
		tech2: "CSS",
		tech3: "JavaScript",
		tech4: "React",
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
