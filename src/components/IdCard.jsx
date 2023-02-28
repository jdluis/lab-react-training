function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div
      style={{
        backgroundColor: 'gray',
        borderRadius: '15px',
        maxWidth: '300px',
        padding: '20px',
      }}
    >
      <img src={picture} alt={firstName} />
      <div>
        <p>
          <span>First Name: </span>
          {firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {lastName}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Height </span>
          {height}
        </p>
        <p>
          <span>Birth: </span>
          {birth.getDay()}-{birth.getMonth()}-{birth.getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
