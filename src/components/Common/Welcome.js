"use client";

import React from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <>
      <section id="welcome" className="welcome-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>Fara Sound</h4>
            <h2>
              Welcome to <span>Excellence</span>
            </h2>
            <p>
              Your event only happens once. A unique moment in time that will
              have a lasting impact on the lives of your attendees. Don&apos;t
              leave your technology needs to chance.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa-regular fa-handshake icon"></i>
                <h3>Experience</h3>
                <p>
                  From grammy award winning artists to multi-day conferences
                  with thousands of people, we&apos;ve worked with the best.
                </p>
                {/* <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-wand-magic-sparkles icon"></i>
                <h3>Excellence</h3>
                <p>
                  Our team has extensive training in customer experience, so
                  you&apos;ll not just get great AVL, you&apos;ll love working
                  with us.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-person-chalkboard icon"></i>
                <h3>Expertise</h3>
                <p>
                  We&apos;ll discuss your event needs down to the last detail,
                  and recommend a custom solution that fits your budget.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
