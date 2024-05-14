// external dependencies
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
// ans hai [ 1, 2, 3, 4 ] q ki flattenDeep method ki wjh se

