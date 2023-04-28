import "../pages/flightlisting.css";
import FlightBox from "../components/FlightBox";
import FilterFixer from "../components/FilterFixer";
import Sliderr from "@mui/material/Slider";
import React, { useEffect, useState, useRef, createRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import arrow from "../svgs/arrow.svg";
import FlyCards from "../components/FlyCards";
import flycard from "../svgs/flycard.svg";
import flycard1 from "../svgs/flycard1.svg";
import flycard2 from "../svgs/flycard2.svg";
import flycard3 from "../svgs/flycard3.svg";
import hamburger from "../svgs/hamburger.svg";

function FlightListing() {
  const [range, setRange] = React.useState([50, 1200]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const currentMilitaryTime = new Date().getHours() * 100;
  const [time, setTime] = useState([0, 2400]);

  function fromMilitaryTime(militaryTime) {
    const atLeastFourLong = militaryTime.toString().padStart(4, "0");
    const hours = atLeastFourLong.slice(0, 2);
    const minutes = Math.floor(
      (parseInt(atLeastFourLong.slice(2, 4)) / 100) * 60
    );
    return `${hours}:${minutes.toString().padEnd(2, "0")}`;
  }
  useEffect(() => {
    if (time[0] >= 1200) {
      document.getElementById("am").innerHTML = "pm";
    } else {
      document.getElementById("am").innerHTML = "am";
    }

    if (time[1] <= 1200) {
      document.getElementById("pm").innerHTML = "am";
    } else {
      document.getElementById("pm").innerHTML = "pm";
    }
  });
  const [buttons, setButtons] = useState([
    { label: "0+", enabled: false },
    { label: "1+", enabled: false },
    { label: "2+", enabled: false },
    { label: "3+", enabled: false },
    { label: "4+", enabled: false },
  ]);

  const handleButtonClick = (index) => {
    const newButtons = [...buttons];
    newButtons[index].enabled = !newButtons[index].enabled;
    setButtons(newButtons);
  };

  const [checkedIndex, setCheckedIndex] = useState(null);
  const handleCheckboxChange = (index) => {
    if (index === checkedIndex) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };

  const [checkedIndex1, setCheckedIndex1] = useState(null);

  const handleCheckboxChange1 = (index1) => {
    if (index1 === checkedIndex1) {
      setCheckedIndex1(null);
    } else {
      setCheckedIndex1(index1);
    }
  };

  const [number, setNumber] = useState(4);
  const allCardsRef = useRef(null);

  const [flights, setFlights] = useState([
    {
      time: 200,
      price: 104,
      jsx: <FlyCards img={flycard} price={"104$"} time={"200"} key={1} />,
    },
    {
      time: 370,
      price: 200,
      jsx: <FlyCards img={flycard1} price={"200$"} time={"370"} key={2} />,
    },
    {
      time: 500,
      price: 150,
      jsx: <FlyCards img={flycard2} price={"150$"} time={"500"} key={3} />,
    },
    {
      time: 130,
      price: 324,
      jsx: <FlyCards img={flycard3} price={"324$"} time={"130"} key={4} />,
    },
    {
      time: 127,
      price: 687,
      jsx: <FlyCards img={flycard} price={"687$"} time={"127"} key={5} />,
    },
    {
      time: 546,
      price: 584,
      jsx: <FlyCards img={flycard1} price={"584$"} time={"546"} key={6} />,
    },
    {
      time: 713,
      price: 78,
      jsx: <FlyCards img={flycard2} price={"78$"} time={"713"} key={7} />,
    },
    {
      time: 376,
      price: 297,
      jsx: <FlyCards img={flycard3} price={"297$"} time={"376"} key={8} />,
    },
  ]);
  const [originalFlights, setOriginalFlights] = useState([...flights]);
  const [SortOption, SetSortOption] = useState("Recommended");

  const handleSortChange = (event) => {
    SetSortOption(event.target.value);

    if (event.target.value === "Cheapest") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.price - b.price)
      );
    } else if (event.target.value === "Best") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => b.price - a.price)
      );
    } else if (event.target.value === "Quickest") {
      setFlights((prevFlights) =>
        prevFlights.slice(0, number).sort((a, b) => a.time - b.time)
      );
    } else if (event.target.value === "Recommended") {
      setFlights(originalFlights.slice(0, number));
    }
  };
  const [noMoreCards, setNoMoreCards] = useState(false);

  const handleShowMore = () => {
    SetSortOption("Recommended");
    const newNumber = number + 4;
    if (newNumber >= originalFlights.length) {
      setNoMoreCards(true);
    }
    setNumber(newNumber);
    setFlights((prevFlights) =>
      originalFlights.slice(0, newNumber).sort((a, b) => {
        const indexA = prevFlights.findIndex((flight) => flight.key === a.key);
        const indexB = prevFlights.findIndex((flight) => flight.key === b.key);
        return indexA - indexB;
      })
    );
  };

  const getSelectedOptionIndex = () => {
    switch (SortOption) {
      case "Recommended":
        return 3;
      case "Cheapest":
        return 0;
      case "Best":
        return 1;
      case "Quickest":
        return 2;
      default:
        return 0;
    }
  };

  const greenLineStyle = {
    left: `calc(${getSelectedOptionIndex()} * (100% / 4) + 10px)`,
  };

  const [filterHam, setFilterHam] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <FlightBox
            small={
              <button
                className="heh"
                style={{
                  background: "#8DD3BB",
                  borderRadius: "4px",
                  padding: "15px 16px",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9781 13.3281L14.9659 13.3444L14.9803 13.3588L19.3903 17.7688C19.5856 17.9875 19.6898 18.2727 19.6816 18.5658C19.6734 18.8591 19.5532 19.1382 19.3457 19.3457C19.1382 19.5532 18.8591 19.6734 18.5658 19.6816C18.2727 19.6898 17.9875 19.5856 17.7688 19.3903L13.3588 14.9803L13.3444 14.9659L13.3281 14.9781C11.9186 16.0369 10.2029 16.6085 8.44003 16.6066C3.93701 16.6066 0.273438 12.943 0.273438 8.44C0.273438 3.93701 3.93701 0.273438 8.44 0.273438C12.943 0.273438 16.6066 3.93701 16.6066 8.44C16.6085 10.2029 16.0369 11.9186 14.9781 13.3281ZM2.56656 8.44V8.44003C2.56843 9.99718 3.18783 11.49 4.28891 12.5911C5.38998 13.6922 6.88282 14.3116 8.43997 14.3134H8.44C9.60166 14.3134 10.7372 13.969 11.7031 13.3236C12.669 12.6782 13.4218 11.7609 13.8664 10.6877C14.3109 9.61444 14.4272 8.43349 14.2006 7.29415C13.974 6.15481 13.4146 5.10827 12.5931 4.28685C11.7717 3.46544 10.7252 2.90605 9.58585 2.67942C8.44652 2.45279 7.26556 2.56911 6.19233 3.01365C5.1191 3.4582 4.2018 4.21101 3.55642 5.17689C2.91103 6.14278 2.56656 7.27834 2.56656 8.44Z"
                    fill="#112211"
                    stroke="#112211"
                    strokeWidth="0.046875"
                  />
                </svg>
              </button>
            }
            clss={"flight-box1"}
            puts={"ganputs"}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="mother-box"
            style={{ display: "flex", flexWrap: "wrap", marginTop: "32px" }}
          >
            <img
              className="filterham"
              data-index={filterHam}
              onClick={() => {
                setFilterHam(!filterHam);
              }}
              src={hamburger}
              style={{
                width: "40px",
                backgroundColor: "black",
                height: "40px",
                padding: "3px",
                borderRadius: "5px",
                display: "none",
                position: "fixed",
                left: "31%",
                top: "50%",
                zIndex: "99999999",
              }}
            ></img>
            <div
              className="filters"
              data-index={filterHam}
              style={{ width: "30%" }}
            >
              <div className="mnb" style={{ display: "flex" }}>
                <h4 style={{ marginBottom: "35px" }}>Filters</h4>
              </div>

              <FilterFixer
                text="price"
                everything={
                  <div style={{ padding: "20px" }}>
                    <Sliderr
                      value={range}
                      onChange={handleChanges}
                      valueLabelDisplay="auto"
                      min={50}
                      max={1200}
                    />
                  </div>
                }
              />

              <FilterFixer
                text="Departure time"
                everything={
                  <div id="slider-root-cont">
                    <Slider.Root
                      className="SliderRoot"
                      defaultValue={[currentMilitaryTime]}
                      max={2400}
                      min={0}
                      step={1}
                      aria-label="Time"
                      value={time}
                      onValueChange={setTime}
                    >
                      <Slider.Track className="SliderTrack">
                        <Slider.Range className="SliderRange" />
                      </Slider.Track>
                      <Slider.Thumb className="SliderThumb" />
                      <Slider.Thumb className="SliderThumb1" />
                    </Slider.Root>
                    <span id="time1">
                      {fromMilitaryTime(time[0])}
                      <span id="am">am</span>
                    </span>
                    <span id="time2">
                      {fromMilitaryTime(time[1])}
                      <span id="pm">pm</span>
                    </span>
                  </div>
                }
              />

              <FilterFixer
                text="Rating"
                everything={
                  <div id="but-cont">
                    {buttons.map((button, index) => (
                      <button
                        key={index}
                        data-enabled={button.enabled}
                        onClick={() => handleButtonClick(index)}
                        style={{ marginLeft: index === 0 ? "0px" : "" }}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                }
              />

              <FilterFixer
                text="Airlines"
                everything={
                  <div id="LIS">
                    <ul>
                      {["Emirated", "Fly Dubai", "Qatar", "Etihad"].map(
                        (airline, index) => (
                          <li key={airline}>
                            <label>
                              <input
                                type="checkbox"
                                checked={index === checkedIndex}
                                onChange={() => handleCheckboxChange(index)}
                              />
                              {airline}
                            </label>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                }
              />

              <FilterFixer
                text="Trips"
                everything={
                  <div id="LIS">
                    <ul>
                      {[
                        "Round trip",
                        "On Way",
                        "Multi-City",
                        "My Dates Are Flexible",
                      ].map((airline1, index1) => (
                        <li key={airline1}>
                          <label>
                            <input
                              type="checkbox"
                              checked={index1 === checkedIndex1}
                              onChange={() => handleCheckboxChange1(index1)}
                            />
                            {airline1}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </div>

            <div className="buyings" style={{ width: "70%" }}>
              <div className="leftLine"></div>
              <div className="secondFilterBox">
                <div className="greenLine" style={greenLineStyle}></div>
                <div className="secondFilterColl">
                  <div className="secondFiltertext">
                    <h5>Cheapest</h5>
                    <p>$99 . 2h 18m</p>
                  </div>
                </div>

                <div className="secondFilterColl">
                  <div className="secondFiltertext">
                    <h5>Best</h5>
                    <p>$99 . 2h 18m</p>
                  </div>
                </div>

                <div className="secondFilterColl">
                  <div className="secondFiltertext">
                    <h5>Quickest</h5>
                    <p>$99 . 2h 18m</p>
                  </div>
                </div>

                <div className="secondFilterColl">
                  <div className="secondFiltertext1">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 1.5H17.25M0.75 6H17.25M0.75 10.5H17.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p>Other sort</p>
                  </div>
                </div>
              </div>

              <div className="arrange">
                <h6>
                  Showing {number} of <span>257 places</span>
                </h6>
                <div className="ksuk" style={{width: 'fit-content', marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                  <h5>Sort by</h5>
                  <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                    <select value={SortOption} onChange={handleSortChange}>
                    <option value="Recommended">Recommended </option>
                    <option value="Cheapest">Cheapest</option>
                    <option value="Best">Best</option>
                    <option value="Quickest">Quickest</option>
                  </select>
                  <img src={arrow}></img>
                  </div>
                  
                </div>
              </div>

              <div ref={allCardsRef} className="allcards">
                {flights.slice(0, number).map((flight) => flight.jsx)}
              </div>

              <div className="showMoreBtnBox">
                {!noMoreCards && (
                  <button className="showMoreBtn" onClick={handleShowMore}>
                    Show More
                  </button>
                )}

                {noMoreCards && (
                  <p className="noMoreCards">No more cards to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightListing;
