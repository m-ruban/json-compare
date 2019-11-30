import { COMPARE_DIFF, COMPARE_EQ, COMPARE_REQ } from 'constants/compare';
import { EQUALITY_TYPE_IGNORE, EQUALITY_TYPE_NOT_STRICT, EQUALITY_TYPE_STRICT } from 'constants/equality';
import { IAlert } from 'constants/interfaces';
import {string} from 'prop-types';

let equalityTypes: string;
let state;
export function equalAlerts(left: any[] | object, right: any[] | object, type: string): Map<string, IAlert> {
    state = new Map();
    equalityTypes = type;
    compare(left, right);
    return state;
}

const findByPath = (obj: any, paths: string[]): any | undefined => {
    let current: any = obj;
    for (const path of paths) {
        if (current[path] === undefined) {
            return undefined;
        } else {
            current = current[path];
        }
    }
    return current;
};

const compareValue = (lvalue: any, rvalue: any, type: string): string => {
    const op: object = {
        [EQUALITY_TYPE_NOT_STRICT]: (a, b) => a == b,// tslint:disable-line
        [EQUALITY_TYPE_STRICT]: (a, b) => a === b,
    };
    let res: string;
    if (!rvalue) {
        res = COMPARE_REQ;
    } else {
        if (typeof lvalue !== 'object') {
            res = op[type](lvalue, rvalue) ? COMPARE_EQ : COMPARE_DIFF;
        }
    }
    return res;
};

const compare = (left: any, right: any, keys: string[] = []): void => {
    for (const prop in left) {
        if (!left.hasOwnProperty(prop)) {
            continue;
        }
        const value: any = left[prop];
        const type: string = typeof value;
        const path: string[] = keys.slice();
        path.push(prop);
        const rvalue: any = findByPath(right, path);

        let res: string;
        if (equalityTypes === EQUALITY_TYPE_IGNORE) {
            res = rvalue ? COMPARE_EQ : COMPARE_REQ;
        } else {
            res = compareValue(value, rvalue, equalityTypes);
        }

        if (res !== COMPARE_EQ) {
            state.set(path.join('-'), { res, scalar: type !== 'object' });
        }
        if (type === 'object') {
            compare(value, right, path);
        }
    }
};

export const getType = (value: any): string => {
    let type: string = typeof value;
    if (type === 'object') {
        if (Array.isArray(value)) {
            type = 'array';
        }
        if (value === null) {
            type = 'null';
        }
    }
    return type;
};
