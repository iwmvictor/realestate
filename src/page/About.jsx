import React from "react";

import './../style/about.scss'
import img from "./../assets/brand/agency.png";

const values = [
  {
    title: "Customer-first",
    description:
      "To continually improve, we have to walk in our customers’ shoes to understand their challenges. Always ask: Are we doing what’s best to help our customers?",
  },

  {
    title: "Embrace Innovation",
    description:
      "We believe that innovation is the key to growth and success. We encourage our team members to think creatively and explore new ideas.",
  },
  {
    title: "Collaboration",
    description:
      "We believe that collaboration is the key to success. We work together as a team to achieve our goals and support each other in our endeavors.",
  },
  {
    title: "Be an Owner",
    description:
      "We believe that everyone is an owner. We take responsibility for our actions and strive to make a positive impact on our customers, our community, and our environment.",
  },
  {
    title: "Results-driven",
    description:
      "We believe that results are what matter most. We set high standards for ourselves and strive to achieve them in everything we do.",
  },
  {
    title: "Move Fast",
    description:
      "We believe that speed is essential to success. We move quickly to respond to opportunities and challenges",
  },
];

function About() {
  return (
    <>
      <div className="about-page">
        <div className="hero">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="container">
            <div className="content">
              <span>our vision</span>
              <h2>
                To become the first choice for renters looking for contemporary
                living.
              </h2>
              <p>
                We truly understand how important it is to find community and a
                safe, comfortable home quickly so you can settle down and start
                living your life after you move.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="vision">
            <p>our vision</p>
            <h2>To make the living experience more enjoyable for everyone.</h2>
          </div>
          <div className="mission">
            <h2>We are Rwandanna for the reasons</h2>

            <div className="div">
              {values.map((value, index) => (
                <div className="box">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
