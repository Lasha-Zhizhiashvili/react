import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logowhite.svg";
import plane from "../svgs/planewhite.svg";
import bed from "../svgs/bedwhite.svg";
import hamburger from "../svgs/hamburger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const credit = JSON.parse(localStorage.getItem("CreditCard"));
  const user = JSON.parse(localStorage.getItem("UserData"));

  return (
    <>
      <img
        className="hamburger"
        src={hamburger}
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          left: "25px",
          top: "25px",
          display: "none",
        }}
      ></img>
      <nav
        className="wht"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          height: "90px",
          alignItems: "center",
          margin: "0 30px",
        }}
      >
        <div className="butt" style={{ display: "flex", gap: "33.5px" }}>
          <Link
            to="MoreFlights"
            style={{ color: "white", textDecoration: "none" }}
          >
            <img src={plane} style={{ marginRight: "5px" }} />
            Find Flight
          </Link>
          <Link
            to="/MoreHotels"
            style={{ color: "white", textDecoration: "none" }}
          >
            <img src={bed} style={{ marginRight: "5px" }} />
            Find Stays
          </Link>
        </div>

        <Link to="#">
          <img src={Logo} />
        </Link>

        {credit?.LoggedIn ? (
          <div className="loggedinInfo">
            <div className="FavoriteButt">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.74805L7.28325 2.01133C5.5989 0.280067 2.51415 0.877695 1.40036 3.05284C0.876534 4.07583 0.75875 5.55246 1.71429 7.43758C2.63457 9.25313 4.54767 11.4265 8 13.7946C11.4523 11.4265 13.3654 9.25313 14.2857 7.43758C15.2413 5.55246 15.1235 4.07583 14.5996 3.05284C13.4859 0.877695 10.4011 0.280067 8.71675 2.01133L8 2.74805ZM8 15C-7.33313 4.86841 3.27876 -3.04087 7.82432 1.14308C7.88395 1.19797 7.94253 1.25493 8 1.314C8.05747 1.25494 8.11605 1.19797 8.17567 1.14309C12.7212 -3.04088 23.3331 4.8684 8 15Z"
                  fill="black"
                />
              </svg>
              <Link to="/Favorites">
                <h6>Favourites</h6>
              </Link>
              <p>|</p>
            </div>
            <div className="ProfileButt">
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
                  color: "white",
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
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "10px 25px",
                }}
              >
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
