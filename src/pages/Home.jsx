import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/home.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import plane from "../svgs/plane.svg";
import bed from "../svgs/bed.svg";
import Navbar from "../components/NavbarWhite";
import Text from "../components/Text";
import CardCont from "../components/CardCont.jsx";
import Bigcard from "../components/Bigcard";
import Slidecardcont from "../components/Slidecardcont";

function Home() {
  return (
    <>
      <Header
        title="Helping Others"
        text="Special offers to suit your plan"
        bigtext="Live & Travel"
        navbar={<Navbar />}
        nahh={
          <div className="but">
            <a href="#" className="onl">
              <img src={plane} />
              Flights
            </a>
            <a href="#" className="only">
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

      <Footer />
    </>
  );
}

export default Home;
