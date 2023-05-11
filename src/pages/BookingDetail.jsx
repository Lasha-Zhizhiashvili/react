import { Link } from "react-router-dom";
import EmiratesCard from "../components/EmiratesCard";
import "../pages/bookingdetail.css";
import reallysmallplane from "../svgs/reallysmallplane.svg";
import { useState } from "react";

function BookingDetail() {
  const [selectedOption, setSelectedOption] = useState("payInFull");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="flightDetailText">
            <div>
              <p style={{ color: "#FF8682" }}>Turkey</p>
              <h6>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L5.5 6L1 10.5"
                    stroke="#112211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h6>
              <p style={{ color: "#FF8682" }}>istanbul</p>
              <h6>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L5.5 6L1 10.5"
                    stroke="#112211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h6>
              <p>CVK Park Bosphorus Hotel Istanbul</p>
            </div>
          </div>
          <div className="DetailBox">
            <div className="DetailFirstColl">
              <EmiratesCard />

              <div className="payment">
                <label
                  className={`payinfull ${
                    selectedOption === "payInFull" ? "selected" : ""
                  }`}
                  htmlFor="payInFull"
                >
                  <div>
                    <h5>Pay in full</h5>
                    <p>Pay the total and you are all set</p>
                  </div>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="payInFull"
                    id="payInFull"
                    checked={selectedOption === "payInFull"}
                    onChange={handleOptionChange}
                  ></input>
                </label>
                <label
                  className={`payinlater ${
                    selectedOption === "payInLater" ? "selected" : ""
                  }`}
                  htmlFor="payInLater"
                >
                  <div>
                    <h5>Pay part now, part later</h5>
                    <p>
                      Pay $207.43 now, and the rest ($207.43) will be
                      automatically charged to the same<br></br> payment method
                      on Nov 14, 2022. No extra fees.
                    </p>
                    <Link to="/TermsAndCondition">
                      <h6 style={{ marginTop: "40px" }}>More info</h6>
                    </Link>
                  </div>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="payInLater"
                    id="payInLater"
                    checked={selectedOption === "payInLater"}
                    onChange={handleOptionChange}
                  ></input>
                </label>
              </div>

              <div className="CreditCardBox">
                <h3>Login or Sign up to book</h3>
                <input type="number" placeholder="Phone number"></input>
                <p>
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply. <b>Privacy Policy</b>
                </p>
                <button>Continue</button>

                <div className="orCont">
                  <h5>or</h5>
                  <div className="or"></div>
                </div>

                <div className="otherMethods">
                  <div className="othericons">
                    <button>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.333 12.0733C24.333 5.40546 18.9604 0 12.333 0C5.70563 0 0.333008 5.40536 0.333008 12.0733C0.333008 18.0994 4.72126 23.0943 10.458 24V15.5633H7.41113V12.0733H10.458V9.41343C10.458 6.38755 12.2496 4.71615 14.9905 4.71615C16.3035 4.71615 17.6768 4.95195 17.6768 4.95195V7.92313H16.1636C14.6728 7.92313 14.208 8.85381 14.208 9.80864V12.0733H17.5361L17.0041 15.5633H14.208V24C19.9448 23.0943 24.333 18.0995 24.333 12.0733Z"
                          fill="#1877F2"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1832 10.5555C14.1738 8.95703 14.898 7.75234 16.3605 6.86406C15.5426 5.69219 14.3051 5.04766 12.6738 4.92344C11.1293 4.80156 9.43945 5.82344 8.8207 5.82344C8.1668 5.82344 6.67148 4.96563 5.49492 4.96563C3.0668 5.00313 0.486328 6.90156 0.486328 10.7641C0.486328 11.9055 0.694922 13.0844 1.11211 14.2984C1.66992 15.8969 3.68086 19.8133 5.77852 19.75C6.87539 19.7242 7.65117 18.9719 9.07852 18.9719C10.4637 18.9719 11.1809 19.75 12.4043 19.75C14.5207 19.7195 16.3395 16.1594 16.8691 14.5563C14.0309 13.218 14.1832 10.6375 14.1832 10.5555ZM11.7199 3.40703C12.9082 1.99609 12.8004 0.711719 12.7652 0.25C11.7152 0.310938 10.5012 0.964844 9.80976 1.76875C9.04805 2.63125 8.60039 3.69766 8.69648 4.9C9.83086 4.98672 10.8668 4.40313 11.7199 3.40703Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="emailcontinue">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.875 0.75H3.125C2.42904 0.750744 1.76179 1.02755 1.26967 1.51967C0.777545 2.01179 0.500744 2.67904 0.5 3.375V14.625C0.500744 15.321 0.777545 15.9882 1.26967 16.4803C1.76179 16.9725 2.42904 17.2493 3.125 17.25H18.875C19.571 17.2493 20.2382 16.9725 20.7303 16.4803C21.2225 15.9882 21.4993 15.321 21.5 14.625V3.375C21.4993 2.67904 21.2225 2.01179 20.7303 1.51967C20.2382 1.02755 19.571 0.750744 18.875 0.75ZM18.2103 5.09203L11.4603 10.342C11.3287 10.4444 11.1667 10.4999 11 10.4999C10.8333 10.4999 10.6713 10.4444 10.5397 10.342L3.78969 5.09203C3.71038 5.03214 3.64377 4.95709 3.59372 4.87123C3.54367 4.78537 3.51118 4.69042 3.49815 4.5919C3.48511 4.49338 3.49179 4.39325 3.51778 4.29733C3.54378 4.20142 3.58858 4.11162 3.64958 4.03316C3.71058 3.95471 3.78656 3.88916 3.87312 3.84032C3.95967 3.79149 4.05506 3.76034 4.15376 3.74869C4.25245 3.73704 4.35248 3.74513 4.44802 3.77247C4.54357 3.79981 4.63272 3.84587 4.71031 3.90797L11 8.79984L17.2897 3.90797C17.447 3.7892 17.6447 3.73711 17.84 3.76296C18.0354 3.78881 18.2128 3.89053 18.3338 4.04612C18.4547 4.20171 18.5096 4.39866 18.4865 4.59439C18.4634 4.79011 18.3642 4.96888 18.2103 5.09203Z"
                        fill="#112211"
                      />
                    </svg>
                    Continue With Email
                  </button>
                </div>
              </div>
            </div>
            <div className="DetailSecondColl">
              <div className="in1">
                <div className="BuyingCard">
                  <img src={reallysmallplane}></img>
                  <div className="detal">
                    <h5>Economy </h5>
                    <h4>Emirates A380 Airbus</h4>
                    <div className="kidding">
                      <h6
                        style={{
                          padding: "8.5px 11px",
                          border: "1px solid #8DD3BB",
                          borderRadius: "4px",
                          marginRight: "8px",
                          width: "40px",
                          height: "32px",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        4.2
                      </h6>
                      <b style={{ marginRight: "3px" }}>Very Good</b>
                      <span>54 reviews</span>
                    </div>
                  </div>
                </div>
                <div className="detaltext">
                  <p>
                    Your booking is protected by <b>golobe</b>
                  </p>
                </div>
                <div className="detalprices">
                  <h4>Price Details</h4>
                  <div className="price1">
                    <h5>Base Fare</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Discount</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Taxes</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                  <div className="price1">
                    <h5>Service fee</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>

                  <div className="finalprice">
                    <h5>Total</h5>{" "}
                    <h4>
                      <b>$400</b>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingDetail;
