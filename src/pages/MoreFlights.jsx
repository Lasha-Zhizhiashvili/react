import "./Moreflights.css";
import FlightBox from "../components/FlightBox";
import Text from "../components/Text";
import map from "../svgs/map.svg";
import TravelCard from "../components/TravelCard";
import arr from "../svgs/arr.svg";

function MoreFlights() {
  return (
    <>
      <header className="header2">
        <div className="poto">
          <FlightBox but={<p className="plo">Where do you want to go?</p>} button={<div className="twobut">
                <button className="hah1"> + Add Promo Code</button>
                <button className="hah">
                  <img src={arr}></img> <a style={{color: 'black'}} href="/FLightListing">Show Filghts</a> 
                </button>
              </div>} />
        </div>
      </header>

      <Text
        bigtext="Lets go places together"
        text="Discover the latest offers and news and start planning your next trip with us."
        margin="200px"
      />

      <img src={map} style={{ width: "100%", maxWidth: "100%" }}></img>

      <Text
        bigtext="Fall into trave"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        margin="70px"
      />

      <div className="container">
        <div className="row">
          <div className="travel-box">
            <div className="travel-coll">
              <TravelCard
                bigtext="Melbourne"
                text="An amazing Journey"
                price="700"
                url="https://s3-alpha-sig.figma.com/img/c71a/d062/25503ea5e34fcbd5c294b0beb7cc10df?Expires=1681689600&Signature=BgL1Yb4aAKCdqgVRxMP-GEuR401Wki1LyEmRFoKPiBR9r3qTFr8w43hdNNYMKKASx3ysmPoZq4BVEadCVlP187ZFqEDT9UskQEIgTwNSgr7GBlIIUvLCsrifV4CIATbMTMA1i7cBAJ1WxQn~IAnVksX2uWDfi3s~DTQhJy6lU0TilymhNdd1-iDL3W1o4XYIXdFuwvfBUBZiBCv0gaXvGkOO-Z2jR58VOp3BJAxNxp9JVtR4~aYemt5LSTeiJL~RjQXEqEP3iBgLBXn3YKyKYop5LUPo-OBqJ3XnCWs9-tYlQIg7P4JAWROgukNT4uNVzVkv--clsz1VpeognJClAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="Paris"
                text="A Paris Adventure"
                price="600"
                url="https://s3-alpha-sig.figma.com/img/858b/93a3/328ffd0f5cf808a4cb33de6196a169ad?Expires=1681689600&Signature=dLQwiD2iAs-7eyqFMKg2SHH9StLHh0sF~vJc3VN0nwLG6EarAb1QiBHOSTTBX-qQrQvh0Ly8xEbRmpwvZBJMFBxHlDl5J2ohm88lD3cgVWzjWKEMVLi8EjpvXQwUP1-yEEO-1GZRWiBndWf4I7W7pq1lUG2ldw-jDvPftH289FW5vXP-db6IL8rzQ9feHMEotq-WmFP64iYrWfmi6gkrs5AK9aBUbCbd7PN4HlN5GXkNbLcO~-ulTVSvlptGYXvXe~k-fXc25cVJaRv47ar46KeeI~HJbYa-tagZUJAuT1JxpvJqji-rqLvWHKEzNQuDrwWJtsue2CxlkmIKd~27xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="London"
                text="London eye adventure"
                price="350"
                url="https://s3-alpha-sig.figma.com/img/6d5e/d399/d1e91688d8a476fefe70f0dfab2d5b3a?Expires=1681689600&Signature=aC20Hfz7lhxE0rOx7zJGp5YtMLOZoeR-~HDmlvCUtIX5BJHR3J75I85V9qmE46vJNnoHUrNqJ~ro5HhO56E2HhFdcl0rnDqcGEUWxyGLpGMYWxmqN4VKhU23jAMafKDm-xncwSaNepfjlgkeMNojxMxu84pNr8F9tHmL8xNJB~fg4buW5Kb2PmOX3knhX4d6EqIXtSF2W-7VAMAzpOgWTJrucc2oJ9WUWXA4nC6G7qsQgD0My5Vp0y0gob8rJ7yBPJPPt4jXW2AVY5-W7~dC05AmisJyjVu~kNrNGUZ2GMULSnpjJ1aqWM~Z6A0Mlfv2-omD32oF9-s5-9M9t617gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>

            <div className="travel-coll">
              <TravelCard
                bigtext="Columbia"
                text="Amazing streets"
                price="700"
                url="https://s3-alpha-sig.figma.com/img/66d4/9ab6/8f604dd35614cb22ea38afb5adf58a96?Expires=1681689600&Signature=MCys~wuvrkTNj4aYKdf9xp~ofmMITqqemOPOr46~e6GxWHfbZqPI4526WjWZVxWrlnOTT4jO2m2fyUcXJ50X7aAYOohZ-JaYPMYRGRkzfdaf9ezfZuUHGZOq4lY4~mlWDsKSmLZDY~damAgRMZrHb9NICSH0aY0k2vP6V8s~1emwZgkOoxZVpybYwLFqzATT7G~zdzTjq0e2kYb3vcdOtK1o27Qi-wXmonQpKjQosk2A-DG4G-FNVFaH5vgn9efAu6BQFi6HnL~ySUO6tjdNc7qZWWcv19HUG1At7-H3TcUTs1QpnyQDfaUDHaNW8T9gi2QIbIAsVIA0PmWWTzSY7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
          </div>
        </div>
      </div>

      <Text
        bigtext="Fall into trave"
        text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        margin="70px"
      />

      <div className="container">
        <div className="row">
          <div className="poto-box">
            <div className="poto-coll">
              <div className="poto-read">
                <div style={{ display: "flex" }}>
                  <h1 style={{ fontSize: "55px" }}>
                    Backpacking<br></br> Sri Lanka
                  </h1>
                  <h5
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      marginLeft: "auto",
                      width: "68px",
                      height: "62px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    From<br></br> $700
                  </h5>
                </div>

                <p style={{ margin: "24px 0 120px 0" }}>
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    height: "48px",
                  }}
                >
                  Book Flight
                </button>
              </div>
            </div>

            <div className="poto-coll">
              <div className="poto-read1">
                <div className="poto-colll first">
                  <div
                    className="poto-readd"
                    style={{
                      backgroundImage:
                        "url(https://s3-alpha-sig.figma.com/img/7b30/2616/a6222e8b4e641e29e6b5853b337b334b?Expires=1681689600&Signature=OkZjQ5yyA7CYU7IcrFDikrOX38wqxqB4PrGKUHF-Y3gWPn69OjDrUyb7t0I00yaasuIwVvoRnk9i1eKLtq2aEcmiW6X6XSkKlFLJPjZzL0K7ImW5BzTdmA4DUey2o6ZJaBiSnVwWdhWpdEvP-mdEDzdA45fnTmubwUD7J6vXoVVtD0VollwnDmnnFbEWvuBaPI-VvQ9QbfBJhkaJZOr4x6tMQmf1tFxRQHn0b3ORwSHPwC7i4~h3qCpxch4vh9CT7UFA4iBggR2Qa~wU4tKVqtKk1D5BVCqzLNeHMCnIQFLABBsdd90oaw~hKakGvZpWeDgYgi0qiTMYBXRaIgzNgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>

                <div className="poto-colll">
                  <div className="poto-readd"
                  style={{
                    backgroundImage:
                      "url(https://s3-alpha-sig.figma.com/img/f0b1/4183/cad9ea424dbc28830a153a7c44d9b69d?Expires=1681689600&Signature=WiI7UxaLtKT~9VcBPAekY5~xWsWLleVmfhnfG~0K5x8wmJsPdHK8P-RAZnJ6UzrUFPzQUhz9u9y1RmKSoBmEP-9iOxrN6nJa52aSUIk7Sdl0Bn8mWzdsX~-ZzG5OsTyU9JpTB3eY6xjqjjoGsFySngfXwxpiht5MiLhZCi2uwXmoWvR5UJx5qPFYFfRmtvk4-cqIzDkNYyOIWmJxPLJ-lXhbNyqsS2FiocH3ODI4OHENCLRJk5-Y0zTvKaLGVgJZmsNhT6G6t5o2iO9zB8cMWaycreiK~uSs84bIak52FhTZR4VbWQnpna7p9vzKPE7tLBQzxddNsq9s9fJdxIP2Xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}></div>
                </div>

                <div className="poto-colll first" style={{paddingBottom: '0px'}}>
                  <div className="poto-readd"
                  style={{
                    backgroundImage:
                      "url(https://s3-alpha-sig.figma.com/img/38d0/b3e5/cc10bdad976eebc09afc6986d20ddcf1?Expires=1681689600&Signature=GHqJJXnlVgLd1hEqaI3BDAJhxFWuR1fYkrStDtKZpYtNQff1A4wkMtday9iX7aMumHrwcvZWnsPV0Vpi-PSljdBxTpEonn-NiBimz83aC5uEcO27LuEe1V5SiEfw1llKYQgvI1I1AXXImOlNqs4c-PGCLJFHt1sqEQ3EyAYeVguCtD5Ik2Ut4MUrzTXZ2tkkRtAL9BQYwaqlEhBqCGjhDH3sNx2nIYzApbnzCKJ5oKR0nsb2HeLigG8QhEpxjjzUyytLBE8dMdPjDoy2M3z3BFH8PnTItZ3czsXyFNIzgb-KXWEqT8EtvY0oFWjz32mBGnzac3E5fcBxk2ZvPkAmeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}></div>
                </div>

                <div className="poto-colll" style={{paddingBottom: '0px'}}>
                  <div className="poto-readd"
                  style={{
                    backgroundImage:
                      "url(https://s3-alpha-sig.figma.com/img/29a4/43e9/ca6a4ca34b77b6b0183f1da1033da7a4?Expires=1681689600&Signature=iMeOr6vbAvnADbW-cTIgeUZclAeVzUSQoHcJ32OdlWD2o-efWdi8s6nyDvgyGSp4TEH~7YtvPVC2VDs0oyIhqdLfS8pWYWOSYd-gS-ezRde7~4K1zzHZ6Djg2TzB1iG7oS3EdcTGo~qhtfeiPUcTrbPM1mkD6dhQh0T0eso9lNby2PzGxwxsy~tqm8nwGDOj7EqhsmpcMRc1m3DBIF3DRdVyOtGjcUXiU8cvRhmtSjr3TmQ9lWGr9LdZ3D~UnJqov3URbEb0YZO9~qILqqpvWrxFgOREZ3Tkcd7gKu~d5T-08DBBXf~Nu6RhuTwaX67xtbLpbxJOdGmt-vT-aNV4aA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreFlights;
