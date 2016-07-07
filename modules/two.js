
function toUSD(number){
  return number.toLocaleString("en-US", {style: "currency", currency: "USD"})
}
// console.log(toUSD(443439));

module.exports = {
  toUSD: toUSD
};
