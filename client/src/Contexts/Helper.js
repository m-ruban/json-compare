import Constans from '../Constans'

let equalityTypes, state
export function equalAlerts(left, right, type) {
  state = new Map()
  equalityTypes = type
  compare(left, right)
  return state
}

export function parse(str){
  let value = {}
  try {
    value = JSON.parse(str)
  } catch (err) {}
  return value
}

function str(value) {
  return JSON.stringify(value)
}

function findByPath(obj, paths) {
  let current = obj
  for (let i = 0; i < paths.length; ++i) {

    const path = paths[i]
    if (current[path] === undefined) {
      return undefined
    } else {
      current = current[path]
    }

  }
  return current
}

function compareValue(leftValue, rightValue, equality) {

  const eq = Constans('COMPARE_EQ'),
    diff = Constans('COMPARE_DIFF'),
    req = Constans('COMPARE_REQ'),
    type = typeof leftValue

  const operators = {
    '==': (a, b) => a == b ,
    '===': (a, b) => a === b,
  }

  let res
  if (!rightValue){
    res = req
  } else {
    if (type === 'object') {
      res = str(leftValue) === str(rightValue) ? eq : diff
    } else {
      res = operators[equality](leftValue, rightValue) ? eq : diff
    }
  }

  return res
}

function compare(left, right, keys = []) {

  const eq = Constans('COMPARE_EQ'),
    req = Constans('COMPARE_REQ')

  for(const prop in left) {
    if (!left.hasOwnProperty(prop)) continue

    const value = left[prop],
      path = keys.slice().concat([prop]),
      rightValue = findByPath(right, path),
      type = typeof value

    let res
    switch (equalityTypes) {
      case 'ignore':
        res = rightValue ? eq : req
        break;
      default:
        res = compareValue(value, rightValue, equalityTypes)
        break;
    }

    if (res !== eq) {
      state.set(path.join('-'), {
        res: res,
        scalar: type !== 'object'
      })
    }

    if (type === 'object') {
      compare(value, right, path)
    }

  }
}
