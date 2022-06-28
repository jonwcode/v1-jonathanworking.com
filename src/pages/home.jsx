import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";
import css from "./home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - Home</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <span className={css.helloMyNameIs}>Hello my name is</span>
        <span className={css.fullName}>Jonathan Working</span>
        <span className={css.iBuildWebsites}>
          I build websites that help people
        </span>
        <span className={css.resumeBtn}>
          <a href="https://jonathanworking.com/resume.pdf" target="_blank">
            View Resume
          </a>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Home;
