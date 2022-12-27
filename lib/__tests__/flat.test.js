const { flat } = require('../array')

describe('arrat', () => {
  it('flatten the array', () => {
    expect(flat([2, [3, [6, [7, [9]]]]])).toEqual([2,3,6,7,9])
  })
})
