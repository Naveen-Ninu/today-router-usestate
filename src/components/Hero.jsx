import React from "react";
import Navigation from "./Navigation";
import { useState } from "react";

function Hero() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Navigation />
      <section className="vh-100  bg-danger text-center d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-warning">
          <div className="row">
            <div className="col-12 fw-bold my-auto text-center">
              <p className="text-light fs_md">You clicked {count} times</p>
              <button className="click_me" onClick={() => setCount(count + 2)}>
                1 add
              </button>
              <button
                className="click_me mx-4"
                onClick={() => setCount(count - 2)}
              >
                1 subtract
              </button>
              <button className="click_me" onClick={() => setCount(count * 2)}>
                square root
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
