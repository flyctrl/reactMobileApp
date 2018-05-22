/*
* @Author: chengbaosheng
* @Date:   2017-09-05 18:52:30
* @Last Modified by:   chengbs
* @Last Modified time: 2018-03-20 14:29:04
*/
export const getScopeOption = (text, ScopeOptions) => {
  if (typeof text === 'undefined' || text === null) {
    return
  }
  let textAry = []
  let result = ''
  if (text.indexOf(',') > 0) {
    textAry = text.split(',')
  } else {
    textAry.push(text)
  }
  ScopeOptions.forEach((value, index, arry) => {
    for (let i = 0; i < textAry.length; i++) {
      if (value['value'] === textAry[i]) {
        result += value['label'] + '，'
      }
    }
  })
  return result.substring(0, result.length - 1)
}

export const setDisabledScope = (aryStr, ScopeOptions) => {
  let ary = []
  let resultAry = []
  if (aryStr.indexOf(',') > 0) {
    ary = aryStr.split(',')
  } else {
    ary.push(aryStr)
  }
  for (let i = 0; i < ScopeOptions.length; i++) {
    let bool = false
    for (let j = 0; j < ary.length; j++) {
      if (ScopeOptions[i].value === ary[j]) {
        resultAry.push({ ...ScopeOptions[i], ...{ disabled: false, checked: false }})
        bool = true
      }
    }
    if (!bool) {
      resultAry.push({ ...ScopeOptions[i], ...{ disabled: true, checked: false }})
    }
  }
  return resultAry
}

export const returnFloat = (number) => {
  if (number === 'undefined' || number === 'null' || number === '' || typeof number === 'undefined') {
    return ''
  }
  let value = Math.round(parseFloat(number) * 100) / 100
  let xsd = value.toString().split('.')
  if (xsd.length === 1) {
    value = value.toString() + '.00'
    return value
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0'
    }
    return value
  }
}

export const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return r[2]
  }
  return null
}

/*
			大数字每3位添加逗号
			@method addCommas
			@param {Number} number 需要转换的数字
		*/
export const addCommas = (number) => {
  let newStr = ''
  let count = 0
  let str = ''
  if (number) {
    str = number + ''
  } else {
    return ' '
  }
  if (str.indexOf('.') === -1) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr
      }
      count++
    }
    str = newStr
    return str
  } else {
    for (let i = str.indexOf('.') - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + ',' + newStr
      } else {
        newStr = str.charAt(i) + newStr // 逐个字符相接起来
      }
      count++
    }
    str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3)
    return str
  }
}
