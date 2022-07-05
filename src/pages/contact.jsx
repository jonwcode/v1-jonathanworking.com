import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import css from "./contact.module.css";

const ContactMe = () => {
  useEffect(() => {
    // To ensure when the page is loaded the
    // User always scrolled to the top of the page

    setTimeout(() => {
      document.body.scrollTo(0, 0);
    }, 15);
  }, []);

  return (
    <React.Fragment>
      {" "}
      <Helmet>
        <title>Jonathan Working - Contact</title>
      </Helmet>
      <Header />
      <div className={css.wrapper}>
        <div className={css.content}>
          <div className={css.contactWrapper}>
            <div className={css.inputFields}>
              <span className={css.headerText}>Contact</span>
              <span className={css.field}>Name</span>
              <input name="Name" placeholder="Your Name" />
              <span className={css.field}>Email</span>
              <input name="Name" placeholder="Your Email Address" />
              <span className={css.field}>Message</span>
              <textarea
                name="message"
                placeholder="Your Message To Me"
              ></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactMe;
