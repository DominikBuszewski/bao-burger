import React from "react";
import "./about.styles.scss";
import GallerySlider from "../../components/gallery/gallery.component";

const AboutPage = () => (
	<div className="about">
		<div className="sections">
			<section className="main-info">
				<h2 className="section-title">ABOUT US</h2>

				<p>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
					egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
					hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
					habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
					sodales taciti duis praesent id. Consequat urna vitae morbi nunc
					congue assa egestas mollis varius; dignissim elementum. Mollis
					tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
					Hendrerit parturient habitant pharetra rutrum gravida porttitor eros
					feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna
					vitae morbi nunc congue.{" "}
				</p>
			</section>

			<section className="gallery">
				<h2 className="section-title">GALLERY</h2>
				<GallerySlider />
			</section>

			<section className="workers-info">
				<h2 className="section-title">MEET YOUR COOK</h2>
				<div className="worker-container">
					<div className="worker">
						<img />
						<h3 className="worker-name">Lorem Ipsum</h3>
						<div className="cook-image-container">
							<img className="cook1" />
						</div>
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
							massa egestas mollis varius
						</p>
					</div>
					<div className="worker">
						<h3 className="worker-name">Ipsum Lorem</h3>
						<div className="cook-image-container">
							<img className="cook2" />
						</div>
						<img />
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
							massa egestas mollis varius
						</p>
					</div>
					<div className="worker">
						<h3 className="worker-name">Lora Ipsem</h3>
						<div className="cook-image-container">
							<img className="cook3" />
						</div>
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
							massa egestas mollis varius
						</p>
					</div>
				</div>
			</section>
		</div>
	</div>
);

export default AboutPage;
