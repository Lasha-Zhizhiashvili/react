import card from "../svgs/card.svg";
import Card from "./Card";
import Ranm from '../svgs/Ranm.svg'
import Ranm1 from '../svgs/Ranm1.svg'
import Ranm2 from '../svgs/Ranm2.svg'
import Ranm3 from '../svgs/Ranm3.svg'
import Ranm4 from '../svgs/Ranm4.svg'
import Ranm5 from '../svgs/Ranm5.svg'
import Ranm6 from '../svgs/Ranm6.svg'
import Ranm7 from '../svgs/Ranm7.svg'
import '../components/cardcont.css'


function CardCont() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="cardcont-box"
            style={{ display: "flex", flexWrap: "wrap", margin: "0" }}
          >
            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Istanbul, Turkey" card={card} />
              </div>
            </div>

            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Sydney, Australia" card={Ranm} />
              </div>
            </div>

            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Baku, Azerbaijan" card={Ranm1} />
              </div>
            </div>

            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Malé, Maldives" card={Ranm2} />
              </div>
            </div>

            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Paris, France" card={Ranm3} />
              </div>
            </div>

            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="New York, US" card={Ranm4} />
              </div>
            </div>
            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="London, UK" card={Ranm5} />
              </div>
            </div>
            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Tokyo, Japan" card={Ranm6} />
              </div>
            </div>
            <div className="cardcont-coll" style={{ width: "33%", padding: "16px" }}>
              <div className="cardcont-read">
                <Card text="Dubai, UAE" card={Ranm7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCont;
