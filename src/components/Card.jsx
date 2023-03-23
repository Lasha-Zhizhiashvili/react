function Card({ text, card }) {
  return (
    <>
      <div
        className="box-card"
        style={{
          display: "flex",
          padding: "16px",
          alignItems: "center",
          boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
          borderRadius: "16px",
        }}
      >
        <img style={{marginRight: '15px'}} src={card}></img>
        <div style={{marginTop: '15px'}}>
          <h5>{text}</h5>
          <div style={{ display: "flex" }}>
            <p>Flights *</p>
            <p>Hotels *</p>
            <p>Resorts *</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
