import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/home.css";
import Header from "../components/Header.jsx";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import Navbar from "../components/NavbarWhite";
import Text from "../components/Text";
import CardCont from "../components/CardCont.jsx";
import Bigcard from "../components/Bigcard";
import Slidecardcont from "../components/Slidecardcont";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() =>{
    if(document.querySelector('.wht').style.display == 'flex' ){
    document.querySelector('.Black').style.display = 'none'
  }
  })
  
  return (
    <>
      <Header
        title="Helping Others"
        text="Special offers to suit your plan"
        bigtext="Live & Travel"
        navbar={<Navbar />}
        nahh={
          <div className="but">
            <svg
              width="100"
              height="4"
              viewBox="0 0 100 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="2" x2="100" y2="2" stroke="#8DD3BB" stroke-width="4" />
            </svg>
            <a
              className="onl"
              style={{ cursor: "pointer" }}
              onClick={() => {
                document.querySelector(".jj").style.transform = "translateX(0)";
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
      />

      <Text
        bigtext="Plan your perfect trip"
        text="Search Flights & Places Hire to our most popular destinations"
        but="See more places"
        margin="200px"
        link={<a href="/MoreFlights">See all places</a>}
      />

      <CardCont />

      <Bigcard />

      <Text
        bigtext="Reviews"
        text="What people says about Golobe facilities"
        but="See All"
        margin="70px"
      />
      <Slidecardcont />

    </>
  );
}

export default Home;
