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

function compare(left, right, keys = []) {
  for(const prop in left) {
    if (!left.hasOwnProperty(prop)) continue

    const value = left[prop],
      path = keys.slice().concat([prop]),
      compValue = findByPath(right, path),
      type = typeof value

    let res
    switch (equalityTypes) {
      case '==':
        if (!compValue){
          res = 'req'
        } else {
          if (type === 'object') {
            res = str(value) === str(compValue) ? 'eq' : 'diff'
          } else {
            res = value == compValue ? 'eq' : 'diff'
          }
        }
        break;
      case '===':
        if (!compValue){
          res = 'req'
        } else {
          if (type === 'object') {
            res = str(value) === str(compValue) ? 'eq' : 'diff'
          } else {
            res = value === compValue ? 'eq' : 'diff'
          }
        }
        break;
      default:
        res = compValue ? 'eq' : 'req'
        break;
    }

    if (res !== 'eq') {
      state.set(path.join('-'), {res: res, scalar: type !== 'object'})
    }

    if (type === 'object') {
      compare(value, right, path)
    }

  }
}
