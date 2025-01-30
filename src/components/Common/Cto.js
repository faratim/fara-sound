"use client";

import React from "react";
import Link from "next/link";

const Cto = () => {
  return (
    <>
      <section
        className="ctr-area ptb-80"
        style={{ backgroundImage: `url(/images/ctr-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h4>Anxious about the details?</h4>

                <h2>Take the Stress Out of Planning Your Event</h2>

                <p>
                  Even if you don&apos;t know anything about AVL, we&apos;ll
                  kindly guide you through the process to make your vision a
                  reality.
                </p>

                <Link href="#contact" className="btn btn-primary">
                  Get Started
                </Link>
                {/* <Link href="#work" className="btn btn-primary view-work">
                  View Work
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cto;
