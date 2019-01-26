const Constants = function(name) {

  const constans = {
    FEEDBACK_LINK: "https://bitbucket.org/Dolan_Duck/json-compare/issues",
    COMPARE_EQ: "eq",
    COMPARE_DIFF: "diff",
    COMPARE_REQ: "req"
  }

  return constans[name]

}

export default Constants
