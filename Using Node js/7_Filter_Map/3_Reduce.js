const numver = [1, 2, 3];

const initialValue = 0;
const sumWithInitial = numver.reduce((accumulator, currentValue) => {
  console.log(
    `Accumulator ${accumulator} and the current value ${currentValue}`,
  );
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial); 
