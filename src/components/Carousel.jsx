import { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  const [actualIndex, setActualIndex] = useState(0);

  const handleLeft = () => {
    if (actualIndex !== 0) {
      setActualIndex(actualIndex - 1);
    }
  };

  const handleRight = () => {
    if (actualIndex !== images.length - 1) {
      setActualIndex(actualIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <div>
        <img src={images[actualIndex]} alt="" />
      </div>
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
