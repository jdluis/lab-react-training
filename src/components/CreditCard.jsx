function CreditCard(props) {
  console.log(props);
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardContainer = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: bgColor,
    color: color,
    width: "340px",
    padding: "10px",
    borderRadius: "15px"
  };

  return (
    <div style={cardContainer}>
      <div style={{alignSelf:"end", paddingRight:"10px"}}>
        <h3>{type}</h3>
      </div>
      <div style={{textAlign: "center"}}>
        <p>{number}</p>
      </div>
      <div style={{ display: 'flex', gap: "20px" }}>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
