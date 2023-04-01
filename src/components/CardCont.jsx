import card from "../svgs/card.svg";
import Card from "./Card";
import Ranm from "../svgs/Ranm.svg";
import Ranm1 from "../svgs/Ranm1.svg";
import Ranm2 from "../svgs/Ranm2.svg";
import Ranm3 from "../svgs/Ranm3.svg";
import Ranm4 from "../svgs/Ranm4.svg";
import Ranm5 from "../svgs/Ranm5.svg";
import Ranm6 from "../svgs/Ranm6.svg";
import Ranm7 from "../svgs/Ranm7.svg";
import "../components/cardcont.css";
import { Link } from "react-router-dom";

function CardCont() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="cardcont-box"
            style={{ display: "flex", flexWrap: "wrap", margin: "0" }}
          >
            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/1">
              <div className="cardcont-read">
                <Card text="Istanbul, Turkey" card={card} />
              </div>
              </Link>
            </div>

            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/2">
              <div className="cardcont-read">
                <Card text="Sydney, Australia" card={Ranm} />
              </div>
              </Link>
            </div>

            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/3">
              <div className="cardcont-read">
                <Card text="Baku, Azerbaijan" card={Ranm1} />
              </div>
              </Link>
            </div>

            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/4">
              <div className="cardcont-read">
                <Card text="Malé, Maldives" card={Ranm2} />
              </div>
              </Link>
            </div>

           
              <div
                className="cardcont-coll"
                style={{ width: "33%", padding: "16px" }}
              >
                 <Link to="/cards/5">
                <div className="cardcont-read">
                  <Card text="Paris, France" card={Ranm3} />
                </div>
                </Link>
              </div>
            

            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/6">
              <div className="cardcont-read">
                <Card text="New York, US" card={Ranm4} />
              </div>
              </Link>
            </div>
            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/7">
              <div className="cardcont-read">
                <Card text="London, UK" card={Ranm5} />
              </div>
              </Link>
            </div>
            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/8">
              <div className="cardcont-read">
                <Card text="Tokyo, Japan" card={Ranm6} />
              </div>
              </Link>
            </div>
            <div
              className="cardcont-coll"
              style={{ width: "33%", padding: "16px" }}
            >
              <Link to="/cards/9">
              <div className="cardcont-read">
                <Card text="Dubai, UAE" card={Ranm7} />
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCont;
