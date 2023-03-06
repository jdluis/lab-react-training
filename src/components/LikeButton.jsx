import { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const randomNumber = () => {
    return Math.floor(Math.random() * (color.length - 0) + 0);
  };

  const handleClick = () => {
    let random = randomNumber();
    if (color === colors[random]) {
      random = randomNumber();
    } else {
      setColor(colors[random]);
      setLikes(likes + 1);
    }
  };
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
