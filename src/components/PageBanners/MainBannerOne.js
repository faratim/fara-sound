"use client";

import React from "react";
import Link from "next/link";

const MainBannerOne = () => {
  return (
    <>
      <div
        id="home"
        className="main-banner"
        style={{ backgroundImage: `url(/images/home-splash.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="main-banner-text">
                    {/* <h4
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      We Are Creative
                    </h4> */}

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      The Best <span>Events</span> You&apos;ve Ever Had
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      Full-service AVL for 10-10,000 person corporate events
                      with money left in the budget.
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <Link href="#welcome" className="btn btn-primary">
                        Get Started
                      </Link>

                      {/* <Link href="#work" className="btn btn-primary view-work">
                        View Work
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerOne;
