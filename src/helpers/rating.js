import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";

export function rate(number) {
  let RateArr = [];
  parseInt(number);
  if (number >= 5) {
    number = 5;
  } else if (number % 1 !== 0) {
    let getDecimalVal = number.toString().indexOf(".");
    let decimalPart = number.toString().substring(getDecimalVal + 1);
    console.log(decimalPart);
    decimalPart >= 3 ? (
      RateArr.push(
        <FaStarHalf
          key={Math.floor(Math.random() * 10000)}
          className="half-star"
        />
      )
    ) : (
      <></>
    );
  }
  for (let i = 0; i < number - 1; i++) {
    RateArr.unshift(<AiFillStar key={i} />);
  }
  return [...RateArr];
}
