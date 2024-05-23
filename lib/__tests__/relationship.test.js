const { deduplication } = require('../relationship')

describe('deduplication', () => {
  it('array has duplication in different index', () => {
    expect(deduplication([2, 3, 2, 4, 2, 5])).toEqual([2,3,4,5])
  })

  it('array has no duplication', () => {
    expect(deduplication([2, 3, 4])).toEqual([2,3,4])
  })

  it('array has deduplication in order ', () => {
    expect(deduplication([2, 2, 2, 2, 2, 2, 2, 2, 3, 4])).toEqual([2,3,4])
  })
})
