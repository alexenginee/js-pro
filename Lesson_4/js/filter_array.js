export { getFilterArray, getFilterFilms };

function getFilterArray(array, key1, key2, key3, key4) {
  return array.reduce((total, amount) => {
    total.push(
      `{${key1}: ${amount[key1]}, {${key2}: ${amount[key2]}, {${key3}: ${amount[key3]}, {${key4}: ${amount[key4]}}`
    );
    return total;
  }, []);
}
function getFilterFilms(array, argument, key1, key2) {
  return array.reduce((total, amount) => {
    if (argument === amount[key1] || argument === amount[key2]) {
      total.push(amount);
    }
    return total;
  }, []);
}
