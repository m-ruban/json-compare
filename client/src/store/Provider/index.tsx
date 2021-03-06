import * as React from 'react';

import { COMPARE_REQ } from 'constants/compare';
import { EQUALITY_TYPE_STRICT } from 'constants/equality';
import { IAlertMap, ILog } from 'constants/interfaces';
import { AUTHOR_LINK, FEEDBACK_LINK } from 'constants/links';
import { LOG_INFO } from 'constants/log';
import { Provider } from 'store/Context';

import { equalAlerts } from 'modules/compare';
import { parseAndLog } from 'modules/parse';

interface IProviderProps {
    children: any;
}

interface IProviderState extends IAlertMap {
    author: string;
    changeEqualityTypes: (event: React.SyntheticEvent) => void;
    changeObj: (event: React.SyntheticEvent) => void;
    changeTool: (value: string) => void;
    equalityTypes: string;
    feedback: string;
    isCompare: boolean;
    log: ILog;
    objObject: object;
    objStr: string;
    toggleCompare: (event: React.SyntheticEvent) => void;
    toolObject: object;
    toolStr: string;
}

class AppProvider extends React.Component<IProviderProps, IProviderState> {
    constructor(props) {
        super(props);
        this.state = {
            alerts: new Map(),
            author: AUTHOR_LINK,
            changeEqualityTypes: this.changeEqualityTypes.bind(this),
            changeObj: this.changeObj.bind(this),
            changeTool: this.changeTool.bind(this),
            equalityTypes: EQUALITY_TYPE_STRICT,
            feedback: FEEDBACK_LINK,
            isCompare: false,
            log: { text: '', type: '' },
            objObject: {},
            objStr: '',
            toggleCompare: this.toggleCompare.bind(this),
            toolObject: {},
            toolStr: '',
        };
    }

    public toggleCompare() {
        const log: ILog = {
            text: 'toggle compare',
            type: LOG_INFO,
        };

        this.setState({ isCompare: !this.state.isCompare, log }, this.changeAlerts);
    }

    public changeEqualityTypes(event) {
        const { value } = event.target;
        const log: ILog = {
            text: 'change equality types',
            type: LOG_INFO,
        };
        this.setState({ equalityTypes: value, log }, this.changeAlerts);
    }

    public changeTool(value: string) {
        const { obj, log } = parseAndLog(value);
        this.setState({ toolObject: obj, toolStr: value, log }, this.changeAlerts);
    }

    public changeObj(value: string) {
        const { obj, log } = parseAndLog(value);
        this.setState({ objObject: obj, objStr: value, log }, this.changeAlerts);
    }

    public changeAlerts() {
        const { toolObject, objObject, equalityTypes, isCompare } = this.state;
        const isEmpty: (obj: any) => boolean = (obj) => Object.keys(obj).length === 0;

        if (!isEmpty(toolObject) && !isEmpty(objObject) && isCompare) {
            const alerts = equalAlerts(toolObject, objObject, equalityTypes);
            let req: number = 0;
            let diff: number = 0;
            let text: string = '';

            alerts.forEach((alert) => {
                if (!alert.scalar) { return; }
                if (alert.res === COMPARE_REQ) {
                    req++;
                } else {
                    diff++;
                }
            });

            if (diff > 0 || req > 0) {
                text = `${diff} alert${diff > 1 ? 's' : ''}, ${req} required`;
            } else {
                text = 'objects are equal';
            }

            const log: ILog = { text, type: LOG_INFO };
            this.setState({ alerts, log });
        }
    }

    public render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

export default AppProvider;
