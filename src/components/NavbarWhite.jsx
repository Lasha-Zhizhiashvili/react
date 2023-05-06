import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logowhite.svg";
import plane from "../svgs/planewhite.svg";
import bed from "../svgs/bedwhite.svg";
import hamburger from '../svgs/hamburger.svg'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <img className="hamburger" src={hamburger} style={{width: '50px', height: '50px',  position: 'absolute', left: '25px', top: '25px', display: 'none'}}></img>
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
          <Link to="MoreFlights" style={{ color: "white", textDecoration: "none" }}>
            <img src={plane} style={{ marginRight: "5px" }} />
            Find Flight
          </Link>
          <Link to="#" style={{ color: "white", textDecoration: "none" }}>
            <img src={bed} style={{ marginRight: "5px" }} />
            Find Stays
          </Link>
        </div>

        <Link to="#">
          <img src={Logo} />
        </Link>

        <div className="log-in">
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
          <button
            className="signup"
            style={{
              border: "none",
              backgroundColor: "#FFFFFF",
              borderRadius: '8px',
              padding: "10px 25px",
            }}
          >
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
