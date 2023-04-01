import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/header.css";
import arrows from "../svgs/arrows.svg";
import arrow from "../svgs/arrow.svg";
import arr from "../svgs/arr.svg";
import { Dropdown } from "bootstrap";

function Header({ title, text, bigtext, nahh, navbar }) {
  useEffect(() => {
    let div = document.querySelector(".the");
    let divchild = Array.from(div.children);

    let targetValue = (index) => {};

    divchild.forEach(targetValue);
  }, []);

  function each() {
    document.querySelector(".the").style.display = "none";
    document.querySelector(".thee").style.display = "none";
  }

  return (
    <>
      <header>
        <div className="foto">
          {navbar}
          <div className="container">
            <div className="row">
              <div className="text">
                <h3>{title}</h3>
                <h1>{bigtext}</h1>
                <h5>{text}</h5>
              </div>

              <div className="flight-box">
                {nahh}

                <div className="jj">
                  <div className="end">
                    <div className="inputs">
                      <div id="dropdown">
                        <input id="change" defaultValue={"Lahore - Karachi"} />
                        <div className="the" onClick={each}>
                          <p>Lahore - Karachi</p>
                          <p>clevland1</p>
                          <p>clevland2</p>
                          <p>clevland3</p>
                          <p>clevland4</p>
                        </div>
                        <span>From - To</span>
                        <img
                          src={arrows}
                          onClick={() => {
                            if (
                              document.querySelector(".the").style.display ==
                              "block"
                            ) {
                              document.querySelector(".the").style.display =
                                "none";
                            } else {
                              document.querySelector(".the").style.display =
                                "block";
                                document.querySelector(".thee").style.display =
                                "none";
                            }
                          }}
                        ></img>
                      </div>

                      <div id="switch">
                        <input defaultValue={"Return"} className="small" />
                        <div className="thee" onClick={each}>
                          <p>Lahore - Karachi</p>
                          <p>clevland1</p>
                          <p>clevland2</p>
                        </div>
                        <span>Trip</span>
                        <img
                          className="kok"
                          src={arrow}
                          onClick={() => {
                            if (
                              document.querySelector(".thee").style.display ==
                              "block"
                            ) {
                              document.querySelector(".thee").style.display =
                                "none";
                            } else {
                              document.querySelector(".thee").style.display =
                                "block";
                                document.querySelector(".the").style.display =
                                "none";
                            }
                          }}
                        ></img>
                      </div>

                      <div>
                        <input defaultValue={"07 Nov 22 - 13 Nov 22"} />
                        <span>Depart- Return</span>
                      </div>

                      <div>
                        <input defaultValue={"1 Passenger, Economy"} />
                        <span>Passenger - Class</span>
                      </div>
                    </div>

                    <div className="twobut">
                      <button className="hah1"> + Add Promo Code</button>
                      <button className="hah">
                        <img src={arr}></img>Show Filghts
                      </button>
                    </div>
                  </div>
                  <div className="end1">
                    <div className="inputs">
                      <div id="dropdown">
                        <input id="change" defaultValue={"Lahore - Karachi"} />
                        <div className="the" onClick={each}>
                          <p>Lahore - Karachi</p>
                          <p>clevland1</p>
                          <p>clevland2</p>
                          <p>clevland3</p>
                        </div>
                        <span>From - To</span>
                        <img
                          src={arrows}
                          onClick={() => {
                            if (
                              document.querySelector(".the").style.display ==
                              "none"
                            ) {
                              document.querySelector(".the").style.display =
                                "block";
                            } else {
                              document.querySelector(".the").style.display =
                                "none";
                            }
                          }}
                        ></img>
                      </div>

                      <div id="switch">
                        <input defaultValue={"Return"} className="small" />
                        <div className="thee" onClick={each}>
                          <p>Lahore - Karachi</p>
                          <p>clevland1</p>
                          <p>clevland2</p>
                        </div>
                        <span>Trip</span>
                        <img
                          className="kok"
                          src={arrow}
                          onClick={() => {
                            if (
                              document.querySelector(".thee").style.display ==
                              "none"
                            ) {
                              document.querySelector(".thee").style.display =
                                "block";
                            } else {
                              document.querySelector(".thee").style.display =
                                "none";
                            }
                          }}
                        ></img>
                      </div>

                      <div>
                        <input defaultValue={"07 Nov 22 - 13 Nov 22"} />
                        <span>Depart- Return</span>
                      </div>

                      <div>
                        <input defaultValue={"1 Passenger, Economy"} />
                        <span>Passenger - Class</span>
                      </div>
                    </div>

                    <div className="twobut">
                      <button className="hah1"> + Add Promo Code</button>
                      <button className="hah">
                        <img src={arr}></img>Show Filghts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
