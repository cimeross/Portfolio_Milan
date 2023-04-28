import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import img from "../../assets/logo.png";
import pdfFile from "../../assets/Milan Suvajac-CV.pdf";

const Navbar = () => {
	const [active, setActive] = useState("navBar");
	const [activeHeader, setActiveHeader] = useState("header");
	const showNavBar = () => {
		setActive("navBar activeNavbar");
	};
	const removeNavBar = () => {
		setActive("navBar");
	};
	useEffect(() => {
		const addBg = () => {
			if (window.scrollY >= 10) {
				setActiveHeader("header activeHeader");
			} else {
				setActiveHeader("header");
			}
		};

		addBg();
		window.addEventListener("scroll", addBg);

		return () => {
			window.removeEventListener("scroll", addBg);
		};
	}, []);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = pdfFile;
		link.download = "MilanSuvajac_cv.pdf";
		link.click();
	};

	return (
		<header className={activeHeader}>
			<div className="logoDiv">
				<h1 className="logo">
					<a href="#home">
						<img src={img} alt="logo" />
					</a>
				</h1>
			</div>
			<div className={active}>
				<ul onClick={removeNavBar} className="navLists">
					<li className="navItem">
						<a href="#about" className="navLink">
							<span className="headerNumber">1.</span>About
						</a>
					</li>
					<li className="navItem">
						<a href="#skills" className="navLink">
							<span className="headerNumber">2.</span>Skills
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navLink">
							<span className="headerNumber">3.</span>Projects
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navLink">
							<span className="headerNumber">4.</span>Contact
						</a>
					</li>
					<button className="btn">
						<a onClick={handleDownload} href="#">
							Resume
						</a>
					</button>
				</ul>
				<div onClick={removeNavBar} className="closeNavBar">
					<AiFillCloseCircle className="icon" />
				</div>
			</div>
			<div onClick={showNavBar} className="toggleNavBar">
				<TbGridDots className="icon" />
			</div>
		</header>
	);
};

export default Navbar;
