import React, { useState } from 'react';
import emailJs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_ID';
  const templetID = 'template_ID';
  const userId = 'user_pjIRKb3mbiSqJ9IOms4s3';
  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templetID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    reset.target.reset();
  };
  const sendEmail = (serviceID, templetID, variables, userId) => {
    emailJs
      .send(serviceID, templetID, variables, userId)
      .then(() => {
        setSuccessMessage(
          'Your email is sent successfully! I will get back to you ASAP.'
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>I will contact you back ASAP</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/*cell name*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: 'please enter your name',
                    maxLength: {
                      value: 20,
                      message: 'only 20 characters are allowed.',
                    },
                  })}
                />

                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/*cell phone */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: 'please enter your phone number',
                  })}
                />

                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/*email */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  ref={register({
                    required: 'please enter your email',
                    pattern: {
                      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
                      message: 'invalid email',
                    },
                  })}
                />

                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/*subject */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: 'please put a subject',
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/*description*/}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="message"
                  name="description"
                  ref={register({
                    required: 'please describe the reason of the email',
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="contact-btn" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
