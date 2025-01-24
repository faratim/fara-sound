"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=Uvfs8-tbqBgZvDwR",
        ]}
      />

      <section
        id="about"
        className="about-area ptb-80 bg-f6f6f6"
        // style={{ backgroundImage: `url(/images/patt.png)` }}
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              About <span>Fara Sound</span>
            </h2>
            <p>
              We know what it takes to create an atmosphere that engages your
              audience. With over 15 years experience in designing experiences
              that engage guests and ensure your message is heard, we are the
              team you can trust to deliver a flawless event.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-addax"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <div className="section-title">
                  <h2>
                    You Have <span>Enough</span> to Worry About
                  </h2>
                  <p>
                    Planning and executing an event is hard enough. We have a
                    very simple philosophy: we want to make your life easier.
                    Click the button below to get started on the 3 easy steps:
                  </p>
                </div>

                <ul className="pull-left">
                  <li>
                    <i className="fa fa-check"></i>Fill out the form
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Meet with us
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Pick your package
                  </li>
                </ul>

                {/* <ul>
                  <li>
                    <i className="fa fa-check"></i>Modern Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Awesome Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Digital Marketing & Branding
                  </li>
                </ul> */}

                <p>
                  We&apos;ll take care of the rest so you can focus on the rest
                  of your event!
                </p>
                <br />

                <Link href="#" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-video"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/about.jpg"
                  alt="about"
                  className="w-100"
                  width={560}
                  height={320}
                />

                {/* <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="fa fa-play"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
