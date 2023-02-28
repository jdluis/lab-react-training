function BoxColor(props) {
  const { r, g, b } = props;

  const rectangleStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: '20px 10px',
    width: '100%',
    textAlign: 'center',
  };

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div style={rectangleStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p> {rgbToHex(r,g,b)}</p>
    </div>
  );
}

export default BoxColor;
