const Constants = function(name) {

  const constans = {
    FEEDBACK_LINK: "https://bitbucket.org/Dolan_Duck/json-compare/issues",
    AUTOR_LINK: "https://bitbucket.org/Dolan_Duck/",
    COMPARE_EQ: "eq",
    COMPARE_DIFF: "diff",
    COMPARE_REQ: "req",
    LOG_INFO: "info",
    LOG_ERROR: "error"
  }

  return constans[name]

}

export default Constants
