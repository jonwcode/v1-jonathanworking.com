import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import css from "./contact.module.css";

const ContactMe = () => {
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
              <span class={css.headerText}>Contact</span>
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
