import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/home.css";
import arrows from "../svgs/arrows.svg";
import arrow from "../svgs/arrow.svg";
import arr from "../svgs/arr.svg";

function Header({ title, text, bigtext, nahh, navbar }) {
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

                <div className="inputs">
                  <div>
                    <input defaultValue={"Lahore - Karachi"} /> 
                    <span>From - To</span>
                    <img src={arrows}></img>
                  </div>

                  <div>
                    <input defaultValue={"Return"} className="small" />
                    <span>Trip</span>
                    <img className="kok" src={arrow}></img>
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
      </header>
    </>
  );
}

export default Header;
