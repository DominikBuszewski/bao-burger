import React from "react";
import "./homepage.styles.scss";
import burger from "../../assets/burger.png";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div className="homepage">
		<div className="sign">
			<p>Best burger in town.</p>
			<h1 className="title">
				<span>BAO </span>BURGER
			</h1>
			<p className="slogan">Contact us to see for yourself.</p>
			<div className="buttons">
				<Link to="/About">
					<button className="to-about navigation-button">MORE</button>
				</Link>
				<Link to="/Menu">
					<button className="to-menu navigation-button">ORDER</button>
				</Link>
			</div>
		</div>
		<div className="burger-image">
			<div className="burger-image-container">
				<img src={burger} alt="burger picture" className="burger" />
			</div>
		</div>
	</div>
);

export default HomePage;
