"use client";

import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faq = () => {
  return (
    <>
      <section className="faq-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p>
              If you have any additional quetsions, fill out the contact form
              with your questions and we&apos;ll get back to you ASAP!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Accordion>
                <AccordionItem header="How much will it cost?">
                  <p>
                    We&apos;ve done events for as little as $500 and it goes up
                    from there depending on the size and scope of the event.
                    We&apos;ll work with you to find a solution that fits your
                    budget.
                  </p>
                </AccordionItem>

                <AccordionItem header="Can I just rent your equipment or do I need an AVL tech as well?">
                  <p>
                    It depends on the nature of your event. We can rent you the
                    equipment and you can run it yourself, or we can provide a
                    tech to run the equipment for you. We&apos;ll work with you
                    to find a solution that fits your needs.
                  </p>
                </AccordionItem>

                <AccordionItem header="How much notice is needed to hire you?">
                  <p>
                    Part of making your life easier is being flexible. Even if
                    it&apos;s last minute, reach out to us and we&apos;ll do our
                    best to make it happen.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="image"
                style={{ backgroundImage: `url(/images/faq-img.jpg)` }}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
