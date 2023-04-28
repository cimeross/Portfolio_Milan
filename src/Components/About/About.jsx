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
						As a frontend developer, my passion for programming began a few
						years ago. Prior to that, I worked as a self-taught freelance
						graphic designer, always striving for perfection and enjoying the
						process of creating something by myself. I wanted to expand my
						skills in web design, which led me to discover programming. I
						started learning on my own, and for the past few years, I have found
						myself in the coding world. I am thrilled that I found my true life
						path and never stopped learning and developing my skills, always
						eager to adopt new technologies. With every project, I strive to
						create something that I love and that brings joy to others. <br />{" "}
						<span className="quote">"Live what you love"</span> is a quote that
						resonates with me deeply, and I try to apply it to all aspects of my
						life.
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
