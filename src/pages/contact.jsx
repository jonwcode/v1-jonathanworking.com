<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import css from "./contact.module.css";

const ContactMe = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    msg: "",
    validName: false,
    validEmail: false,
    validMsg: false,
    nameClass: null,
    emailClass: null,
    msgClass: null,
  });

  const handleChange = (evt) => {
    const objName = evt.target.name;
    const val = evt.target.value;

    setFormInputs((prev) => {
      return { ...prev, [objName]: val };
    });
  };

  const handleNameErrors = () => {
    // Here we are going to handle any errors and
    // Check to see if the inputs meet the minimal requirements.

    if (formInputs.name.length <= 1) {
      setFormInputs((prev) => {
        return { ...prev, nameClass: `${css.inputErr}`, validName: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, nameClass: null, validName: true };
      });
    }
  };

  const handleEmailErrors = () => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!formInputs.email.match(regex)) {
      setFormInputs((prev) => {
        return { ...prev, emailClass: `${css.inputErr}`, validEmail: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, emailClass: null, validEmail: true };
      });
    }
  };

  const handleMsgErrors = () => {
    if (formInputs.msg.length <= 20) {
      setFormInputs((prev) => {
        return { ...prev, msgClass: `${css.inputErr}`, validMsg: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, msgClass: null, validMsg: true };
      });
    }
  };

  const handleErrors = () => {
    handleNameErrors();
    handleEmailErrors();
    handleMsgErrors();
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    handleErrors();

    if (formInputs.validName && formInputs.validEmail && formInputs.validMsg) {
      const obj = {
        name: formInputs.name,
        email: formInputs.email,
        msg: formInputs.msg,
      };

      const req = await fetch("/api/sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const res = await req.text();

      console.log(res);
    }
  };

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
      <form method="post" onSubmit={handleSubmit}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.contactWrapper}>
              <div className={css.inputFields}>
                <span className={css.headerText}>Contact</span>
                <span className={css.field}>Name</span>
                <input
                  onChange={handleChange}
                  value={formInputs.name}
                  name="name"
                  onBlur={handleNameErrors}
                  placeholder="Your Name"
                  className={formInputs.nameClass}
                />
                <span className={css.field}>Email</span>
                <input
                  onChange={handleChange}
                  value={formInputs.email}
                  name="email"
                  onBlur={handleEmailErrors}
                  placeholder="Your Email Address"
                  className={formInputs.emailClass}
                />
                <span className={css.field}>Message</span>
                <textarea
                  onChange={handleChange}
                  value={formInputs.msg}
                  name="msg"
                  onBlur={handleMsgErrors}
                  placeholder="Your Message To Me"
                  className={formInputs.msgClass}
                ></textarea>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default ContactMe;
=======
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import css from "./contact.module.css";

const ContactMe = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    msg: "",
    validName: false,
    validEmail: false,
    validMsg: false,
    nameClass: null,
    emailClass: null,
    msgClass: null,
  });

  const handleChange = (evt) => {
    const objName = evt.target.name;
    const val = evt.target.value;

    setFormInputs((prev) => {
      return { ...prev, [objName]: val };
    });
  };

  const handleNameErrors = () => {
    // Here we are going to handle any errors and
    // Check to see if the inputs meet the minimal requirements.

    if (formInputs.name.length <= 1) {
      setFormInputs((prev) => {
        return { ...prev, nameClass: `${css.inputErr}`, validName: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, nameClass: null, validName: true };
      });
    }
  };

  const handleEmailErrors = () => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!formInputs.email.match(regex)) {
      setFormInputs((prev) => {
        return { ...prev, emailClass: `${css.inputErr}`, validEmail: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, emailClass: null, validEmail: true };
      });
    }
  };

  const handleMsgErrors = () => {
    if (formInputs.msg.length <= 20) {
      setFormInputs((prev) => {
        return { ...prev, msgClass: `${css.inputErr}`, validMsg: false };
      });
    } else {
      setFormInputs((prev) => {
        return { ...prev, msgClass: null, validMsg: true };
      });
    }
  };

  const handleErrors = () => {
    handleNameErrors();
    handleEmailErrors();
    handleMsgErrors();
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    handleErrors();

    if (formInputs.validName && formInputs.validEmail && formInputs.validMsg) {
      const obj = {
        name: formInputs.name,
        email: formInputs.email,
        msg: formInputs.msg,
      };

      const req = await fetch("/api/sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const res = await req.text();

      console.log(res);
    }
  };

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
      <form method="post" onSubmit={handleSubmit}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.contactWrapper}>
              <div className={css.inputFields}>
                <span className={css.headerText}>Contact</span>
                <span className={css.field}>Name</span>
                <input
                  onChange={handleChange}
                  value={formInputs.name}
                  name="name"
                  onBlur={handleNameErrors}
                  placeholder="Your Name"
                  className={formInputs.nameClass}
                />
                <span className={css.field}>Email</span>
                <input
                  onChange={handleChange}
                  value={formInputs.email}
                  name="email"
                  onBlur={handleEmailErrors}
                  placeholder="Your Email Address"
                  className={formInputs.emailClass}
                />
                <span className={css.field}>Message</span>
                <textarea
                  onChange={handleChange}
                  value={formInputs.msg}
                  name="msg"
                  onBlur={handleMsgErrors}
                  placeholder="Your Message To Me"
                  className={formInputs.msgClass}
                ></textarea>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default ContactMe;
>>>>>>> 9e44303 (Fixed a bug with the add project editor)
