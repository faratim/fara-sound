"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import pinkLogo from "../../../public/images/logo-pink.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h4>
                <Link href="/">
                  <Image src={pinkLogo} alt="logo" width={100} height={100} />
                </Link>
              </h4>

              {/* <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    className="fa-brands fa-facebook-f"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    className="fa-brands fa-twitter"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="fa-brands fa-skype"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    className="fa-brands fa-linkedin-in"
                    target="_blank"
                  ></Link>
                </li>
              </ul> */}

              <p>© FaraSound 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
