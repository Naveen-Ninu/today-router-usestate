import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <section className="vh-100  bg-info text-center d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text_style text-light">Contact</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
