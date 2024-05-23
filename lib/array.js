
function flat(arr) {
  let result = []
  for (const value of arr) {
    if (Array.isArray(value)) {
      result = result.concat(flat(value))
    } else {
      result.push(value)
    }
  }
  return result
}

function isIterable(input) {
  if (input === null || input === undefined) {
    return false
  }

  return typeof input[Symbol.iterator] === 'function'
}

module.exports = {
  flat,
  isIterable
}
