import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const ContactMe = () => {
  return (
    <React.Fragment>
      {" "}
      <Helmet>
        <title>Jonathan Working - Contact</title>
      </Helmet>
      <Header />
      <h1>Contact me</h1>
    </React.Fragment>
  );
};

export default ContactMe;
