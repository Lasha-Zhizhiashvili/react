import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../svgs/logo.svg";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import hamburger from "../svgs/hamburger.svg";

function Navbar({check}) {
  
  return (
    <>
      <div data-check-if-active={`${check}`} className="Black" style={{backgroundColor: "white"}}>
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
            backgroundColor: '#27bba3',
            padding: '3px',
            borderRadius: '5px'
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
                  className="gree"
                  style={{
                    width: "107px",
                    height: "5px",
                    position: "absolute",
                    backgroundColor: "#8DD3BB",
                    bottom: "-33.5px",
                  }}
                ></div>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <img style={{ marginRight: "5px" }} src={plane} />
                  Find Flight
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <img style={{ marginRight: "5px" }} src={bed} />
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
                    color: "white",
                  }}
                >
                  Sign up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
