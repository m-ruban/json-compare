import Constans from '../../Constans';

let equalityTypes, state;
export function equalAlerts(left, right, type) {
  state = new Map();
  equalityTypes = type;
  compare(left, right);
  return state;
}

const findByPath = (obj, paths) => {
  let current = obj;
  for (let i = 0; i < paths.length; ++i) {
    const path = paths[i];
    if (current[path] === undefined) {
      return undefined;
    } else {
      current = current[path];
    }
  }
  return current;
};

const compareValue = (lvalue, rvalue, type) => {
  const op = {
    '==': (a, b) => a == b,
    '===': (a, b) => a === b
  };
  let res;
  if (!rvalue) {
    res = Constans('COMPARE_REQ');
  } else {
    if (typeof lvalue !== 'object') {
      res = op[type](lvalue, rvalue)
        ? Constans('COMPARE_EQ')
        : Constans('COMPARE_DIFF');
    }
  }
  return res;
};

const compare = (left, right, keys = []) => {
  for (const prop in left) {
    if (!left.hasOwnProperty(prop)) continue;
    const value = left[prop],
      type = typeof value,
      path = keys.slice();

    path.push(prop);
    const rvalue = findByPath(right, path);

    let res;
    switch (equalityTypes) {
      case 'ignore':
        res = rvalue ? Constans('COMPARE_EQ') : Constans('COMPARE_REQ');
        break;
      default:
        res = compareValue(value, rvalue, equalityTypes);
        break;
    }

    if (res !== Constans('COMPARE_EQ')) {
      state.set(path.join('-'), { res: res, scalar: type !== 'object' });
    }
    if (type === 'object') {
      compare(value, right, path);
    }
  }
};
