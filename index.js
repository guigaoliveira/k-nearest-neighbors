const euclidean = (arr1, arr2) =>
  Math.hypot(...arr1.map((val, index) => val - arr2[index]));
const sortBy = (dataset, f) => dataset.sort((a, b) => f(a) - f(b));
const identity = val => val;
const getKitens = (arr, k) => arr.slice(0, k);
const makeOdd = val => (val % 2 ? val : val + 1);
const countBy = (arr, f = identity) => [
  ...arr
    .map(item => f(item))
    .reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map())
];
const maxBy = (arr, f = identity) => {
  const transform = arr.map(item => f(item));
  return arr[transform.indexOf(Math.max(...transform))];
};
const distances = {
  euclidean
};
const defaultOptions = dataset => ({
  k: Math.round(dataset.length ** 0.5),
  distance: "euclidean"
});
const classify = (unknown, dataset, options = defaultOptions(dataset)) => {
  const datasetSorted = sortBy(dataset, ({ data }) =>
    distances[options.distance](data, unknown.data)
  );
  const arrKItens = getKitens(datasetSorted, makeOdd(options.k));
  const countClass = countBy(arrKItens, ({ type }) => type);
  return maxBy(countClass, item => item[1])[0];
};

module.exports = {
  classify
};
