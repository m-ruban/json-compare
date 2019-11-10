import { LOG_ERROR, LOG_INFO } from 'constants/log';

interface IParseResult {
    success: boolean;
    value: any[] | object | string;
}

interface ILog {
    text: string;
    type: string;
}

export function parseAndLog(str: string): { log: ILog, obj: any[] | object } {
    const result: IParseResult = parse(str);
    const { success, value } = result;

    let obj = {};
    let log: ILog = {
        text: '',
        type: '',
    };

    if (success) {
        obj = value;
        log = {
            text: 'input value for object',
            type: LOG_INFO,
        };
    } else {
        log = {
            text: result.value.toString(),
            type: LOG_ERROR,
        };
    }

    return {
        log,
        obj,
    };
}

function parse(str: string): IParseResult {
    const result: IParseResult = {
        success: true,
        value: {},
    };

    try {
        result.value = JSON.parse(str);
    } catch (err) {
        result.success = false;
        result.value = err.message;
        return result;
    }

    return result;
}
