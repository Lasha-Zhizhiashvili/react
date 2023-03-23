import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logo.svg";
import "../components/navbarblack.css";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";

function Navbar() {
  return (
    <>
      <nav
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
          <a href="#" style={{ color: "black", textDecoration: "none" }}>
            <img src={plane} />
            Find Flight
          </a>
          <a href="#" style={{ color: "black", textDecoration: "none" }}>
            <img src={bed} />
            Find Stays
          </a>
        </div>

        <a href="#">
          <img src={Logo} />
        </a>

        <div className="log-in">
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
          <button
            className="signup"
            style={{
              border: "none",
              backgroundColor: "black",
              borderRadius: "8px",
              padding: "10px 25px",
              color: 'white',
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
