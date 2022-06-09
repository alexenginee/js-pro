export { getSortArray };

function getSortArray(array, key) {
  return array.sort((a, b) => {
    return a[key] - b[key];
  });
}
