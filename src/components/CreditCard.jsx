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
  };

  return (
    <div style={cardContainer}>
      <div>
        <h3>{type}</h3>
      </div>
      <div>
        <p>{number}</p>
      </div>
      <div style={{ display: 'flex' }}>
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
