export { getUniqueArray };

function getUniqueArray(array, key) {
  return array.reduce((total, amount) => {
    amount[key].forEach((el) => {
      if (total.indexOf(el) === -1) {
        total.push(el);
      }
    });
    return total;
  }, []);
}
