import { useEffect, useState } from 'react';
/* ☆
★ */
function Rating(props) {
  const { children } = props;
  const [stars, setStars] = useState([]);



  useEffect(() => {
    countStar();
  }, []);

  console.log(stars, children);

  const countStar = () => {
    const num = Math.round(Math.min(Math.max(Number(children), 0), 5));
    const fullStars = '★'.repeat(num);
    const emptyStars = '☆'.repeat(5 - num);
    setStars(fullStars + emptyStars);
  };
  return (
    <div>
      {stars}
    </div>
  );
}

export default Rating;
