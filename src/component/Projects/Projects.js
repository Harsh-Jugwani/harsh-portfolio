import React from "react";
import "./Proj.css";
import img1 from "./projImg/CreditCard.jpg";
import img2 from "./projImg/DriverDrowsiness.jpg";
import img3 from "./projImg/HRanalytics.jpg";
import img4 from "./projImg/food-order.jpg";
import NetflixGpt from "./projImg/NetflixGpt.png";
import LoanApp from "./projImg/loanApp.png";

const Cards = (props) => {
  return (
    <div className="proj-card">
      <img className="project_im" src={props.images} alt="no_img" />

      <h3 className="h3Class">{props.proj_title}</h3>
      <h6 className="h6Class">{props.content}</h6>
    </div>
  );
};
export default function Projects() {
  return (
    <div id="conatiner-proj">
      <h1 className="heading_proj">
        HERE'S A GLIMPSE OF <br />
        SOME EXITING{" "}
        <svg
          className="icon-proj"
          xmlns="http://www.w3.org/2000/svg"
          height="39 "
          viewBox="0 -960 960 960"
          width="38"
        >
          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
        </svg>
        PROJECTS <br />
        I'VE DONE
      </h1>
      <div className="box">
        <Cards
          images={NetflixGpt}
          proj_title="NetflixGpt"
          content="Technologies Used- HTML5,TAILWIND,JAVASCRIPT,REACTJS,REDUX,FIREBASE
I developed a Netflix clone with Sign In/Sign Out functionality, integrated TMDB for content, and included a search
feature. Enjoy a personalized streaming experience with this user-friendly platform."
        />
        <Cards
          images={LoanApp}
          proj_title="Mini Loan App"
          content="Technologies Used - REACTJS,TAILWIND,NODEJS,EXPRESS,MONGODB
The Loan Management System is a web application designed to manage loans, track repayments, and facilitate
loan-related operations.Key features of this Loan Management System include loan creation, repayment
processing"
        />
        <Cards
          images={img4}
          proj_title="HungryHub - GPT enabled website"
          content="Creating a Food Delivery Website involves various components, including user interfaces for customers and restaurant owners, order processing, payment integration, and more."
        />
        <Cards
          images={img1}
          proj_title="Credit Card Fraud Detection project"
          content="Building a Credit Card Fraud Detection project involves using machine learning techniques to identify and prevent fraudulent transactions."
        />
        <Cards
          images={img2}
          proj_title="Driver Drowsiness Detection project"
          content="Building a Driver Drowsiness Detection project involves using computer vision techniques and machine learning to monitor a driver's behavior and detect signs of drowsiness."
        />
        <Cards
          images={img3}
          proj_title="HR Analytics Dashboard"
          content="Creating an HR Analytics Dashboard involves collecting, analyzing, and visualizing key HR metrics to provide insights into workforce performance, employee engagement, and other relevant factors. "
        />
      </div>
      <a href="https://github.com/Harsh-Jugwani" target="_blank">
        <button className="ViewAll">View all Projects</button>
      </a>
    </div>
  );
}
