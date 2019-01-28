import Constans from '../../Constans'

export function parseAndLog(str) {
  const result = parse(str),
    {success, value} = result

  let obj = {},
    log = {}

  if (success) {
    obj = value
    log = {
      text: 'input value for object',
      type: Constans('LOG_INFO')
    }
  } else {
    log = {
      text: result.value,
      type: Constans('LOG_ERROR')
    }
  }

  return {
    obj: obj,
    log: log
  }
}

function parse(str){
  const result = {
    success: true,
    value: {}
  }

  try {
    result.value = JSON.parse(str)
  } catch (err) {
    result.success = false
    result.value = err.message
    return result
  }

  return result
}
