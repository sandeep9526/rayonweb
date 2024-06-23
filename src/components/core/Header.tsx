"use client"
import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const totalPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollPx / totalPx) * 100;

      const progressBar = document.getElementById('myProgressBar');
      if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
      }
    };

    document.addEventListener('scroll', updateProgressBar);

    return () => {
      document.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
        <a href="/" className="navbar-brand p-0">
          <img
            alt="Logo"
            loading="lazy"
            width={0}
            height={0}
            decoding="async"
            data-nimg={1}
            style={{ color: 'transparent', width: '100%', height: 'auto' }}
            sizes="100vw"
            srcSet="/_next/image?url=%2Fimg%2Flogo.png&w=640&q=75 640w, /_next/image?url=%2Fimg%2Flogo.png&w=750&q=75 750w, /_next/image?url=%2Fimg%2Flogo.png&w=828&q=75 828w, /_next/image?url=%2Fimg%2Flogo.png&w=1080&q=75 1080w, /_next/image?url=%2Fimg%2Flogo.png&w=1200&q=75 1200w, /_next/image?url=%2Fimg%2Flogo.png&w=1920&q=75 1920w, /_next/image?url=%2Fimg%2Flogo.png&w=2048&q=75 2048w, /_next/image?url=%2Fimg%2Flogo.png&w=3840&q=75 3840w"
            src="http://localhost:3000/_next/image?url=%2Fimg%2Flogo.png&w=3840&q=75"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="project.html" className="nav-item nav-link">
              Project
            </a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="/" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </a>
        </div>
      </nav>
      {/* Progress Bar */}
      <div className="progress-container-new">
        <div className="progress-bar-new" id="myProgressBar"></div>
      </div>
    </div>
  );
};

export default Header;
