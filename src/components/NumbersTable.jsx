import { useEffect, useState } from 'react';

function NumbersTable(props) {
  const { limit } = props;
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    drawNumbersBoxes();
  }, []);

  const drawNumbersBoxes = () => {
    let numberClone = [];
    for (let index = 0; index <= limit; index++) {
      numberClone.push(index);
    }
    setNumbers(numberClone);
    console.log(numbers);
  };

  const styleBox = {
    padding: '20px',
    border: '2px solid black',
  };

  const styleBoxRed = {
    padding: '20px',
    border: '2px solid black',
    background: 'red',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map((number) => {
        return (
          <div key={number} style={number % 2 === 1 ? styleBox : styleBoxRed}>
            <p>{number}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
