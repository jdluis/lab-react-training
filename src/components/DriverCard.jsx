import Rating from '../components/Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div
      style={{
        color: 'white',
        background: 'blue',
        gap: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: '200px',
      }}
    >
      <div style={{ width: '100px', height: '100px' }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '100%',
          }}
          src={img}
          alt={name}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model}- {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
