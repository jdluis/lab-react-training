function Greetings(props) {
  return (
    <p style={{
        border: "2px solid black"
    }}>
      {props.lang === 'de'
        ? 'Hallo '
        : props.lang === 'fr'
        ? 'Bonjour '
        : props.lang === 'es'
        ? 'Hola '
        : 'Hello '}
        
      {props.children}!
    </p>
  );
}

export default Greetings;
