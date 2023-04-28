import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { TbArrowBigRightLines } from "react-icons/tb";
import { BiChevronsDown } from "react-icons/bi";
import "./home.scss";

const Home = () => {
	return (
		<section id="home" className="home section">
			<div className="leftIcons">
				<div className="socials grid ">
					<a href="https://github.com/cimeross" target="_blank">
						<AiFillGithub className="icon" />
					</a>
					<a href="https://app.netlify.com/teams/cimeross" target="_blank">
						<SiNetlify className="icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/milan-suvajac-ms"
						target="_blank"
					>
						<AiOutlineLinkedin className="icon" />
					</a>
				</div>
				<div className="line"></div>
			</div>
			<div className="container homeContainer">
				<span className="introText">Hi my name is,</span>
				<h1 className="title">Milan Suvajac</h1>
				<span className="subTitle">
					A passionate and enthusiastic{" "}
					<span className="frontendDeveloper">frontend developer</span>.
				</span>
				<p className="homeParagraph">
					I develop scalable web based applications and software.
				</p>
				<div className="lowerHomeSection">
					<button className="contactBtn">
						<a href="#contact" className="flex">
							Contact me <TbArrowBigRightLines className="icon" />
						</a>
					</button>
					<div className="scrollDiv">
						<a href="#about" className="flex">
							<h6 className="scroll">Scroll Down</h6>
							<BiChevronsDown className="icon" />
						</a>
					</div>
				</div>
			</div>
			<div className="rightEmail">
				<div>
					<div className="emailAddress">
						<a href="https://mailto:milansuvajac021@gmail.com" target="_blank">
							milansuvajac021@gmail.com
						</a>
					</div>
					<div className="line"></div>
				</div>
			</div>
		</section>
	);
};

export default Home;
