"use client";
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Image from "next/image";
import thumnail from "../../public/assets/facetec-1.png";
import jwks from "../../public/assets/jwtsjwks_pubprivatejwt.png";
import profile from "../../public/assets/cv-profile.png";

export default function Home() {
  useEffect(() => {
    const mybutton = document.getElementById("topBtn") as HTMLButtonElement;

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <a id="topBtn" href="#hello">
        <span className="nes-btn is-error">^</span>
      </a>
      {!loadingComplete && <Loading onComplete={handleComplete} />}
      {loadingComplete && (
        <div id="hello">
          <main className="flex flex-col items-center justify-between p-4">
            <div className="navbar flex mb-5 gap-6">
              <a href="#hello">
                <span className="nes-btn is-primary">Hello!</span>
              </a>
              <a href="#skills">
                <span className="nes-btn is-success">Theses my skills</span>
              </a>
              <a href="#exp">
                <span className="nes-btn is-warning">Experiences</span>
              </a>
              <a href="#poc">
                <span className="nes-btn is-primary">Others</span>
              </a>
              <a href="#contact">
                <span className="nes-btn is-error"> Contact me!</span>
              </a>
            </div>
            {/* Greetings */}
            <div className="nes-container with-title is-centered bg-blue-200 w-[70rem] mb-5">
              <p className="title">Greetings!</p>
              <p>
                My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure
                the production and delivery of products and services. My experiences 7 years as a software engineer
                enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives
                is to keep updated with the latest IT trends and technologies.
              </p>
            </div>

            {/* Profile */}
            <div className="nes-container is-rounded bg-white w-[70rem]">
              <p>Mr.Panuwat Boonrod - Software Engineer</p>
              <hr></hr>
              <div className="flex">
                <Image src={profile} alt="profile-img" style={{ width: "22%", gap: "3", marginTop: "1rem" }} />
                <ul className="nes-list is-disc ml-8 mt-4">
                  <li>I`m passionate about learning and development</li>
                  <li>Develop future goals for self-improvement</li>
                  <li>Big motivation with sofware engineering</li>
                  <li>Latte & Americano addicted</li>
                  <li>Star wars fans!</li>
                  <li>Dog lover</li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "right", gap: "1rem" }}>
                <a href="https://github.com/newzpanuwat" target="_blank">
                  <i className="nes-icon github is-medium"></i>
                </a>
                <a href="mailto:panuwat.brd@gmail.com" target="_blank">
                  <i className="nes-icon google is-medium"></i>
                </a>
                <a href="https://www.linkedin.com/in/newzpanuwat/" target="_blank">
                  <i className="nes-icon linkedin is-medium"></i>
                </a>
                <a href="https://medium.com/@newzpanuwat" target="_blank">
                  <i className="nes-icon medium is-medium"></i>
                </a>
              </div>
            </div>
            <br />
            <button id="skills" type="button" className="nes-btn is-warning">
              Hire me, Click
            </button>

            {/* Skills */}
            <div className="flex flex-col items-center justify-between mt-5">
              <p>::Skills::</p>
              <div className="nes-container is-rounded bg-green-400 w-[70rem]">
                <p>::Programming Languages</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-warning">Javascript</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Typescript</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error mr-3">Ruby</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Java</span>
                  </a>
                  <a href="https://www.python.org/" target="_blank" className="nes-badge">
                    <span className="is-primary">Python</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-red-200 w-[70rem]">
                <p>::Framework</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary mr-3">React.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">Next.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Nest.js</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">RoR</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Express</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Spring</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-blue-200 w-[70rem]">
                <p>::State management & CSS library</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary">React-redux</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">RTK</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Redux-saga</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">MUI</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Tailwind</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Styled-comp</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-green-200 w-[70rem]">
                <p id="my-element">::Testing</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-success">Vitest</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Jest</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Rspec</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">jUnit</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-purple-200 w-[70rem]">
                <p>::Database</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary mr-3">Mysql</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-success">Mongo DB</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Redis</span>
                  </a>
                </div>
              </div>
              <br />
              <div className="nes-container is-rounded bg-blue-200 w-[70rem]">
                <p>::DevOps</p>
                <div className="flex mb-5 gap-3">
                  <a href="#" className="nes-badge">
                    <span className="is-primary">Docker</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-error">Jenkins</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-primary">k8s</span>
                  </a>
                  <a href="#" className="nes-badge">
                    <span className="is-warning">k3s</span>
                  </a>
                </div>
              </div>
            </div>
            <br />

            {/* Others */}
            <div className="flex flex-col items-center justify-between mt-5">
              <p id="poc" className="title">
                ::Others & POC::
              </p>
              {/* pokedex */}
              <div className="nes-container is-rounded bg-blue-300 w-[70rem]">
                <p>Pokedex/v1</p>
                <hr></hr>
                <div className="flex mb-5">
                  <img
                    id="pokemon-image"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
                    style={{ width: "100%", height: "100%", gap: "2" }}
                  ></img>
                  <p style={{ margin: "1rem" }}>
                    <a href="https://poke-v1-six.vercel.app/" target="_blank">
                      Pokedex/v1
                    </a>
                    The webpage `PokeAPI` at was created during a hackathon with pure JS & CSS in just 24 hrs. It allows
                    users to search for Pokémon by name or ID and provides detailed information, including stats,
                    abilities, and images. This project showcases the rapid development of a functional and
                    user-friendly interface for interacting with Pokémon data.
                  </p>
                </div>
              </div>
              <br />
              {/* facetec */}
              <div className="nes-container is-rounded bg-white w-[70rem]">
                <p>POC::Facetec(development)</p>
                <hr></hr>
                <div className="flex mb-5">
                  <Image
                    src={thumnail}
                    alt="facetec-img"
                    style={{ width: "20%", height: "40%", gap: "2", marginTop: "0.5rem" }}
                  />
                  <p style={{ margin: "1rem" }}>
                    <a href="https://github.com/newzpanuwat/poc-facetec" target="_blank">
                      POC/facetec
                    </a>
                    This POC is contain features of liveness-3d, 2d-2d with Browser SDK facetec, You can fork this repo,
                    then improve with another processor e.g. PhotoIDMatch, Enrollment, this POC can scan your face with
                    development server, but in development account with limte exceed limit from facetec
                  </p>
                </div>
              </div>
              <br />
              {/* auth/jwks-express */}
              <div className="nes-container is-rounded bg-white w-[70rem]">
                <p>POC::JWTKS Auth</p>
                <hr></hr>
                <div className="flex mb-5">
                  <Image
                    src={jwks}
                    alt="auth1-img"
                    style={{ width: "20%", height: "40%", gap: "2", marginTop: "0.5rem" }}
                  />
                  <p style={{ margin: "1rem" }}>
                    <a href="https://github.com/newzpanuwat/express-auth-poc" target="_blank">
                      POC/JWTKS Auth
                    </a>
                    In a modern web application, particularly one that involves user-specific content or restricted
                    access areas, authentication and secure token management are critical. Using JSON Web Tokens (JWTs)
                    along with JWKS (JSON Web Key Set) provides a robust mechanism for ensuring secure access and
                    efficient user management.
                  </p>
                </div>
              </div>
            </div>

            <br />

            {/* Contact */}
            <p id="contact" className="title">
              ::Contact::
            </p>
            <div className="flex items-center mb-5 gap-6">
              <a href="https://github.com/newzpanuwat" target="_blank">
                <i className="nes-icon github is-medium"></i>
              </a>
              <a href="mailto:panuwat.brd@gmail.com" target="_blank">
                <i className="nes-icon google is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/newzpanuwat/" target="_blank">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a href="https://medium.com/@newzpanuwat" target="_blank">
                <i className="nes-icon medium is-medium"></i>
              </a>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
