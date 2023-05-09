<<<<<<< HEAD
import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import css from "./about.module.css";
import imgOfMe from "../assets/images/Me.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - About</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <div className={css.content}>
          <div className={css.imgContainer}>
            <img src={imgOfMe} alt="" />
          </div>
          <span className={css.aboutHeader}>Hi, I'm Jonathan Working</span>
          <span className={css.about}>
            I'm a Full-Stack Web Developer from Kokomo, IN. I love building
            responsive web applications that people love and that ultimately
            help others. I work primarily with React, PHP, MYSQL. <br />
            <br />
            I'm always trying to learn new things the newest of which is Node. I
            have a background in working with and around technology starting at
            a young age.
          </span>
          <span className={css.about}>
            I'm passionate about solving problems and improving the lives of
            others through but not limited to software engineering. As I've said
            I love technology and while Web Development is the primary passion,
            it's not the only one. If you would like to get in touch with me,
            please don't hesitate to contact me.
          </span>
          <span className={css.contactBtn}>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutMe;
=======
import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import css from "./about.module.css";
import imgOfMe from "../assets/images/Me.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - About</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <div className={css.content}>
          <div className={css.imgContainer}>
            <img src={imgOfMe} alt="" />
          </div>
          <span className={css.aboutHeader}>Hi, I'm Jonathan Working</span>
          <span className={css.about}>
            I'm a Full-Stack Web Developer from Kokomo, IN. I love building
            responsive web applications that people love and that ultimately
            help others. I work primarily with React, PHP, MYSQL. <br />
            <br />
            I'm always trying to learn new things the newest of which is Node. I
            have a background in working with and around technology starting at
            a young age.
          </span>
          <span className={css.about}>
            I'm passionate about solving problems and improving the lives of
            others through but not limited to software engineering. As I've said
            I love technology and while Web Development is the primary passion,
            it's not the only one. If you would like to get in touch with me,
            please don't hesitate to contact me.
          </span>
          <span className={css.contactBtn}>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutMe;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)
