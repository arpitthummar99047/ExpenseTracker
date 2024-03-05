import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}

      <footer
        className="text-center text-white footer1"

        // style={{ backgroundColor: "#f1f1f1" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container1 pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-google" aria-hidden="true"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgb(75, 43, 106)" }}
        >
          © 2020 Copyright :
          <a className="text-light" href="https://mdbootstrap.com/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>

      {/* <!-- End of .container --> */}
    </>
  );
}
