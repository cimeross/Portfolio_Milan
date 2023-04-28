import React from "react";
import "./skils.scss";
import { DiReact } from "react-icons/di";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { IoLogoSass } from "react-icons/io";

const Skills = () => {
	return (
		<section id="skills" className="skills container section">
			<div className="sectionTitle">
				<span className="titleNumber">02.</span>
				<h5 className="titleText">
					Skills
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="skillsContainer grid">
				<div className="skillGroup">
					<div className="generalSkills">
						<div className="singleSkill">
							<div className="iconBox flex">
								<DiReact className="icon" />
							</div>
							<span className="skillName">React</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiJavascript className="icon" />
							</div>
							<span className="skillName">JavaScript</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<AiFillHtml5 className="icon" />
							</div>
							<span className="skillName">HTML5</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<IoLogoSass className="icon" />
							</div>
							<span className="skillName">Sass</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiTailwindcss className="icon" />
							</div>
							<span className="skillName">Tailwind</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<DiCss3 className="icon" />
							</div>
							<span className="skillName">CSS</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<BsGit className="icon" />
							</div>
							<span className="skillName">GIT</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiFirebase className="icon" />
							</div>
							<span className="skillName">Firebase</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
