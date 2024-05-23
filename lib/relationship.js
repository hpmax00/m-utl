
function intersection(array1,array2) {
  const _array1 = isArray(array1)
  const _array2 = isArray(array2)
  const intersectionSet = []

  _array1.forEach( item => {
    if (_array2.includes(item)) {
      intersectionSet.push(item)
    }
  })
}

function union(array1,array2) {
  const _array1 = isArray(array1)
  const _array2 = isArray(array2)
}

function insertBetween(array1,array2)  {
  const _array1 = isArray(array1)
  const _array2 = isArray(array2)
}

function deduplication(arrayOrObject) {

  if (Array.isArray(arrayOrObject)) {
    const arrayDeduplication = []

    arrayOrObject.forEach(item => {
      if (!arrayDeduplication.includes(item)) {
        arrayDeduplication.push(item)
      }
    })

    return arrayDeduplication
  }

  if (isObject(arrayOrObject)) {

  }

}

const isArray = array => Array.isArray(array) ? array : []

const isObject = object => object instanceof Object ? object : {}

module.exports = {
  intersection,
  union,
  insertBetween,
  deduplication
}
