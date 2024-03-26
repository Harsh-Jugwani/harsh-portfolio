import React from "react";

import "./Intro.css";
import fire_logo from "./fire_icon-removebg-preview.png";
import resume from "./download-removebg-preview.png";
import talk from "./Lets-Talk-Icon_300x300-removebg-preview.png";
import PrfilePhoto from "./gy7uk-removebg.png";
import pdf from "./Resume_Template_1-4[1].pdf";

export default function Intro() {
  return (
    <div id="container-intro">
      <div className="Intro_conatiner">
        <div className="themeProfile">
          <h1 className="focus_line1">CODING WITH </h1>
          <h1 className="focus_line2">
            <img className="fire_logo" src={fire_logo} alt="no_img" />
            PASSION,CREATING
          </h1>
          <h1 className="focus_line3">WITH PURPOSE</h1>
        </div>
        <div>
          <img className="Profile_img" src={PrfilePhoto} alt="no_img" />
        </div>
      </div>
      <p>
        Hello and welcome to my web developer portfolio. I'm
        <br /> thrilled to showcase my passion for crafting captivating <br />{" "}
        and functional website
      </p>

      <div className="talk_resume">
        <a href="tel:+91842944835">
          <img className="talk" src={talk} alt="no_img" />
        </a>

        <div className="resume_talk">
          <a href={pdf} download="resume.pdf" className="download">
            {" "}
            <button className="download_res">
              <img src={resume} alt="no_img" />
              Download resume
            </button>
          </a>
        </div>
      </div>
      <h3 className="content_intro">
        {" "}
        Hello! I'm Harsh Jugwani a creative <br /> driven web developer and data
        analyst with{" "}
        <span className="experience_year">1 YEAR OF EXPERIENCE</span> in this
        field.
        <br />
        Passionate about creating seamless and innovative web solutions <br />
        that marry cutting-edge technology with data-driven insights,
        <br /> to empower businesses and elevate user experiences in the digital
        realm.
      </h3>
    </div>
  );
}
