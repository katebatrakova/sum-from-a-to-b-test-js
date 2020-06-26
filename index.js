
function sum(fromN, toN) {
  let sumTotal = 0;
  if (fromN === toN) {
    return fromN;
  }
  return sumTotal = fromN + sum((fromN + 1), toN);
}


console.log(sum(3, 7));

module.exports = sum;
