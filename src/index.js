module.exports = function towelSort (matrix) {
  if (matrix) {
    matrix.map((item, id) => {
      if (id % 2) {
        item.reverse()
      }
    })
  } else {
    return []
  }
  
  const result = matrix.flat()

  return result
}

