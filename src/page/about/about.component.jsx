import React from "react";
import "./about.styles.scss";

const AboutPage = () => (
  <div className="about">
    <div className="sections">
      <section className="main-info">
        <h2 className="section-title">ABOUT US</h2>
        <div className="text-wraper">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.{" "}
          </p>
        </div>
      </section>
      <section className="workers-info">
        <h2 className="section-title">MEET YOUR COOK</h2>
        <div className="worker-container">
          <div className="worker">
            <img />
            <h3 className="worker-name">Lorem Ipsum</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius
            </p>
          </div>
          <div className="worker">
            <img />
            <h3 className="worker-name">Ipsum Lorem</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius
            </p>
          </div>
          <div className="worker">
            <img />
            <h3 className="worker-name">Lora Ipsem</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius
            </p>
          </div>
        </div>
      </section>
      <section className="location">
        <h2 className="section-title"></h2>
        <div className="text-wraper">
          <p></p>
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage;
