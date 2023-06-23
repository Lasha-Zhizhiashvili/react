import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logo.svg";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import hamburger from "../svgs/hamburger.svg";
import { Link } from "react-router-dom";

function Navbar({ check, hotel }) {
  const credit = JSON.parse(localStorage.getItem("CreditCard"));
  const user = JSON.parse(localStorage.getItem("UserData"));

  return (
    <>
      <div
        data-check-if-active={`${check}`}
        className="Black"
        style={{ backgroundColor: "white" }}
      >
        <img
          className="hamburger"
          src={hamburger}
          style={{
            zIndex: "999",
            width: "50px",
            height: "50px",
            position: "absolute",
            left: "25px",
            top: "25px",
            display: "none",
            backgroundColor: "#27bba3",
            padding: "3px",
            borderRadius: "5px",
          }}
        ></img>
        <div className="container">
          <div className="row">
            <nav
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: "90px",
                alignItems: "center",
                padding: "0 30px",
              }}
            >
              <div
                className="butt"
                style={{ display: "flex", gap: "33.5px", position: "relative" }}
              >
                <div
                  data-index={hotel}
                  className="gree"
                  style={{
                    width: "107px",
                    height: "5px",
                    position: "absolute",
                    backgroundColor: "#8DD3BB",
                    bottom: "-33.5px",
                  }}
                ></div>
                <Link
                  to="/MoreFlights"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <img style={{ marginRight: "5px" }} src={plane} />
                  Find Flight
                </Link>
                <Link
                  to="/MoreHotels"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <img style={{ marginRight: "5px" }} src={bed} />
                  Find Stays
                </Link>
              </div>

              <Link to="/">
                <img src={Logo} />
              </Link>

              {credit?.LoggedIn ? (
                <div className="loggedinInfo1">
                  <div className="FavoriteButt1">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99954 18.5C9.69846 18.4996 9.40447 18.4086 9.15579 18.2389C5.47189 15.7381 3.87673 14.0234 2.99689 12.9514C1.12189 10.6663 0.224231 8.32016 0.249544 5.77953C0.279075 2.86813 2.61486 0.5 5.45642 0.5C7.52267 0.5 8.95376 1.66391 9.7872 2.63328C9.8136 2.66368 9.84622 2.68805 9.88286 2.70476C9.91949 2.72146 9.95928 2.73011 9.99954 2.73011C10.0398 2.73011 10.0796 2.72146 10.1162 2.70476C10.1529 2.68805 10.1855 2.66368 10.2119 2.63328C11.0453 1.66297 12.4764 0.5 14.5427 0.5C17.3842 0.5 19.72 2.86813 19.7495 5.78C19.7749 8.32109 18.8763 10.6672 17.0022 12.9519C16.1224 14.0239 14.5272 15.7386 10.8433 18.2394C10.5946 18.4089 10.3006 18.4998 9.99954 18.5V18.5Z"
                        fill="#112211"
                      />
                    </svg>
                    <Link to="/Favorites">
                      <h6>Favourites</h6>
                    </Link>

                    <p>|</p>
                  </div>
                  <div className="ProfileButt1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.3125 6C0.3125 9.14098 2.85902 11.6875 6 11.6875C9.14098 11.6875 11.6875 9.14098 11.6875 6C11.6875 2.85902 9.14098 0.3125 6 0.3125C2.85902 0.3125 0.3125 2.85902 0.3125 6ZM8.31574 5.03449C8.35596 4.99216 8.40425 4.9583 8.45777 4.93492C8.51128 4.91154 8.56893 4.89911 8.62732 4.89837C8.68571 4.89762 8.74366 4.90857 8.79775 4.93057C8.85185 4.95257 8.90099 4.98518 8.94228 5.02647C8.98357 5.06776 9.01618 5.1169 9.03818 5.171C9.06018 5.22509 9.07113 5.28304 9.07038 5.34143C9.06964 5.39982 9.05721 5.45747 9.03383 5.51098C9.01045 5.5645 8.97659 5.61279 8.93426 5.65301L6.30926 8.27801C6.22722 8.35999 6.11598 8.40605 6 8.40605C5.88402 8.40605 5.77278 8.35999 5.69074 8.27801L3.06574 5.65301C2.98716 5.57029 2.944 5.46015 2.94546 5.34607C2.94692 5.23199 2.99289 5.12299 3.07356 5.04231C3.15424 4.96164 3.26324 4.91567 3.37732 4.91421C3.4914 4.91274 3.60154 4.95591 3.68426 5.03449L6 7.34996L8.31574 5.03449Z"
                        fill="#FF8682"
                      />
                    </svg>

                    <img src={user.pfp}></img>
                    <h6>{user.firstName}</h6>
                  </div>
                </div>
              ) : (
                <div className="log-in">
                  <Link to="/LogIn">
                    <button
                      className="login"
                      style={{
                        border: "none",
                        backgroundColor: "inherit",
                        color: "black",
                        padding: "10px 35px",
                      }}
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/SignUp">
                    <button
                      className="signup"
                      style={{
                        border: "none",
                        backgroundColor: "black",
                        borderRadius: "8px",
                        padding: "10px 25px",
                        color: "white",
                      }}
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
