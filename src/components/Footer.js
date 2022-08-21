import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../images/MadanyLogo5.png";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    fetch("https://api.github.com/users/mdial009")
      .then((response) => response.json())
      .then((json) => {
        const { followers, public_repos, blog, following } = json;
        setGitHubInfo({
          followers: followers,
          repos: public_repos,
          blogs: blog,
          following: following,
        });
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <span>04. Contact</span>
        <p className="footer-heading">
          <h2>
            Get <span> In</span> Touch
          </h2>
        </p>
        <p className="footer-text">
          Although I'<span>m</span> not currently looking for any new
          opportunities, <span>m</span>y inbox is always open. Whether you have
          a question or just want to say hi, I'll try <span>m</span>y best to
          get back to you! at any ti<span>m</span>e.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              Hit Me Up 😉
            </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              Contact <span>M</span>e
            </h2>
            <Link to="/">
              <span>M</span>adanyx@g<span>m</span>ail.co<span>m</span>
            </Link>
            <Link to="/">
              <span>M</span>adanydiallo@aol.co<span>m</span>
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              Social <span>M</span>edia
            </h2>
            <Link to="/">
              Instagra<span>m</span>
            </Link>
            <Link to="/" href="https://www.facebook.com/madany.diallo.7">
              Facebook
            </Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <a href="https://madany-diallo.netlify.app/">
              <img className="social-logo" src={logo} alt="social-logo" />
            </a>
          </div>
          <small class="website-rights">
            <a
              class="website-rights"
              href="https://github.com/mdial009/Websitev2"
            >
              Madany Diallo © 2020
            </a>
            <a class="website-rights" href="https://github.com/mdial009">
              {githubInfo.followers &&
                githubInfo.repos &&
                githubInfo.following && (
                  <div>
                    Followers:{githubInfo.followers.toLocaleString()}{" "}
                    <span> </span>
                    Repos:{githubInfo.repos.toLocaleString()}
                    <span> </span>
                    Following:{githubInfo.following.toLocaleString()}
                  </div>
                )}
            </a>
            <a class="website-rights" href="https://mdial009.github.io">
              {githubInfo.blogs && (
                <div>{githubInfo.blogs.toLocaleString()}</div>
              )}
            </a>
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i
                href="https://www.facebook.com/madany.diallo.7"
                class="fab fa-facebook-f"
              />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
