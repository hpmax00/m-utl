
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

module.exports = {
  flat
}
