import { useState } from 'react';

import dice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceArray = [dice, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [actualDice, setActualDice] = useState(diceArray[0]);

  const randomDice = () => {
    return Math.floor(Math.random() * (diceArray.length - 0) + 0);
  };

  const handleClick = () => {
    const interval = setInterval(() => {
      let random = randomDice();
      if (actualDice !== diceArray[random]) {
        setActualDice(diceArray[random]);
      } else {
        random = randomDice();
        setActualDice(diceArray[random]);
      }

      clearInterval(interval);
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <img width={'100px'} height={'100px'} src={actualDice} alt="" />
    </div>
  );
}

export default Dice;
