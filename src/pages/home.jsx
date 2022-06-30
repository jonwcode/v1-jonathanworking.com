import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";
import css from "./home.module.css";
import { ReactComponent as GitHubSVG } from "../assets/svg/githubSVG.svg";
import Footer from "../components/footer";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - Home</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <div className={css.content}>
          <span className={css.helloMyNameIs}>Hello my name is</span>
          <span className={css.fullName}>Jonathan Working</span>
          <span className={css.iBuildWebsites}>
            I build websites that help people
          </span>
          <div className={css.groupWrapper}>
            <span className={css.resumeBtn}>
              <a
                href="https://jonathanworking.com/resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Resume
              </a>
            </span>
            <a
              href="https://github.com/jonwcode/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubSVG width="50" className={css.gitHubSVG} height="50" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
