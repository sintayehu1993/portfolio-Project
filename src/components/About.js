import React from "react";
import myPicture from "../aboutMeImag.JPG"
//py-5 means top and bottom of this container
const About = () => {
  return <div className="container py-5">
  <div className="row">
  <div className="col-lg-6 col-xm-12">
    <div className="about-Me-img-Wrapper">
    <img className= "profile-img" src={myPicture} alt="portfolio pic"/>
    </div>
  </div>
  <div className="col-lg-6 col-xm-12">
  <h1 className="About-Heading">About</h1>
    <p>I fell in love with the idea of coding, when I realized the positive impact it can potentially bring on the world. Creating what people might think is impossible, gave me the motivation to develop a mindset to learn new technologies (library/frameworks/languages) and improve my problem-solving skills. I enjoyed learning many technologies in my time @ FullStack Academy, where I was exposed to many way of thinking critically or even building a project from start to finish as a group or solo. However the learning process will never be over! #TrustTheProcess </p>
  </div>
  </div>
  </div>;
};

export default About;
