import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/home.css";
import Navbar from "../components/NavbarWhite";
import Text from "../components/Text";
import CardCont from "../components/CardCont.jsx";
import Bigcard from "../components/Bigcard";
import Slidecardcont from "../components/Slidecardcont";
import { useEffect } from "react";
import Flightbox from "../components/FlightBox";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import arr from "../svgs/arr.svg";

function Home() {
  useEffect(() => {
    if (document.querySelector(".wht").style.display == "flex") {
      document.querySelector(".Black").style.display = "none";
    }
  });

  return (
    <>
      <header className="header1">
        <div className="foto">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="text">
                <h3>Helping Others</h3>
                <h1>Special offers to suit your plan</h1>
                <h5>Live & Travel</h5>
              </div>

              <Flightbox
                but={
                  <div className="but">
                    <svg
                      width="100"
                      height="4"
                      viewBox="0 0 100 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="2"
                        x2="100"
                        y2="2"
                        stroke="#8DD3BB"
                        stroke-width="4"
                      />
                    </svg>
                    <a
                      className="onl"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.querySelector(".jj").style.transform =
                          "translateX(0)";
                        document.querySelector(".but svg").style.transform =
                          "translate(0%)";
                      }}
                    >
                      <img src={plane} />
                      Flights
                    </a>
                    <a
                      className="only"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        document.querySelector(".jj").style.transform =
                          "translateX(-120%)";

                        document.querySelector(".but svg").style.transform =
                          "translate(133%)";
                      }}
                    >
                      <img src={bed} />
                      Stays
                    </a>
                  </div>
                } 
                button={<div className="twobut">
                <button className="hah1"> + Add Promo Code</button>
                <button className="hah">
                  <img src={arr}></img> <a style={{color: 'black'}} href="/FLightListing">Show Filghts</a> 
                </button>
              </div>}
              />
            </div>
          </div>
        </div>
      </header>

      <Text
        bigtext="Plan your perfect trip"
        text="Search Flights & Places Hire to our most popular destinations"
        margin="200px"
        link={<a href="/MoreFlights">See all places</a>}
      />

      <CardCont />

      <Bigcard />

      <Text
        bigtext="Reviews"
        text="What people says about Golobe facilities"
        margin="70px"
      />
      <Slidecardcont />
    </>
  );
}

export default Home;
