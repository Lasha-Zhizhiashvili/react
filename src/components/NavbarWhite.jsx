import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logowhite.svg";
import plane from "../svgs/planewhite.svg";
import bed from "../svgs/bedwhite.svg";

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
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            <img src={plane} style={{ marginRight: "5px" }} />
            Find Flight
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            <img src={bed} style={{ marginRight: "5px" }} />
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
