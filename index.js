let obj = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const countResult = () => {
  let strInput = document.getElementById('combination')
  let resultLetterArr = document.getElementById('result')
  let arrEnterElement = strInput.value.split('')
  let arrArr = []
  let arrKeys = Object.keys(obj)
  for (let i = 0; i < arrEnterElement.length; i++) {
    for (let j = 0; j < arrKeys.length; j++) {
      if (arrEnterElement[i] === arrKeys[j]) {
        arrArr.push(obj[arrKeys[j]])
      }
    }
  }
  const allPossibleVersions = (arr) => {
    if (arr.length === 1) {
      return arr[0]
    } else {
      let result = []
      let versionsEndArr = allPossibleVersions(arr.slice(1))
      for (let i = 0; i < versionsEndArr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + versionsEndArr[i])
        }
      }
      return result
    }
  }

  resultLetterArr.value = allPossibleVersions(arrArr)
}
