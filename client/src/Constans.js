const Constants = function(name) {
    const constants = {
        COMPARE_EQ: 'eq',
        COMPARE_DIFF: 'diff',
        COMPARE_REQ: 'req',
        LOG_INFO: 'info',
        LOG_ERROR: 'error',
    };

    return constants[name];
};

export default Constants;
