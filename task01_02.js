
const myarray = [];

function getotal() {
  return myarray.reduce((a, b) => a + b, 0);
}
function getmy() {
  myarray.push(Math.floor((Math.random() * 10)));

  if (getotal(myarray) > 50) {
    return;
  } else {
    return getmy();
  }
}
