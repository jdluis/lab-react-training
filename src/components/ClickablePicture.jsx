import { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [imgToDisplay, imgImgToDisplay] = useState(img);
  const handleClick = () => {
    imgImgToDisplay(imgClicked === imgToDisplay ? img : imgClicked);
  };

  return (
    <div style={{ width: '100%', cursor:"pointer" }}>
      <img onClick={handleClick} src={imgToDisplay} alt="" />
    </div>
  );
}

export default ClickablePicture;
