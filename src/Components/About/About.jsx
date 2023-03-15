import React from "react";
import "./about.scss";
import { GrDocumentDownload } from "react-icons/gr";
import img from "../../assets/milan_suvajac.png";
import pdfFile from "../../assets/MilanSuvajac_cv.pdf";

const About = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = pdfFile;
		link.download = "MilanSuvajac_cv.pdf";
		link.click();
	};

	return (
		<section id="about" className="about section container">
			<div className="sectionTitle">
				<span className="titleNumber">01.</span>
				<h5 className="titleText">
					About Me
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="sectionContent grid">
				<div className="textSection">
					<h4>
						I have a strong foundation in HTML, CSS, and JavaScript and am
						excited to apply my skills and knowledge to real-world projects.
						Although I have not yet had the opportunity to gain professional
						experience, I am eager to work in a team and learn from experienced
						professionals. I am a quick learner, dedicated team player, and love
						to solve problems. I believe my positive attitude and willingness to
						learn will make me a valuable addition to any organization. I am
						excited to begin my career in the tech industry and would be honored
						to be a part of a dynamic and innovative team.
					</h4>
					<div className="aboutBtn">
						<a onClick={handleDownload} href="#" className="flex">
							Download CV <GrDocumentDownload className="icon" />
						</a>
					</div>
				</div>
				<div className="aboutImgDiv">
					<img src={img} alt="Milan Suvajac" className="aboutImg" />
				</div>
			</div>
		</section>
	);
};

export default About;
