import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';
import { FEEDBACK_LINK, AUTHOR_LINK } from 'constants/links';
import { LOG_INFO } from 'constants/log';
import { COMPARE_REQ } from 'constants/compare';
import { equalAlerts } from 'modules/compare';
import { parseAndLog } from 'modules/parse';
import { EQUALITY_TYPE_STRICT } from 'constants/equality';

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompare: false,
            toggleCompare: this.toggleCompare.bind(this),
            toolStr: '',
            toolObject: {},
            changeTool: this.changeTool.bind(this),
            objStr: '',
            objObject: {},
            changeObj: this.changeObj.bind(this),
            equalityTypes: EQUALITY_TYPE_STRICT,
            changeEqualityTypes: this.changeEqualityTypes.bind(this),
            alerts: new Map(),
            feedback: FEEDBACK_LINK,
            author: AUTHOR_LINK,
            log: { text: '', type: null },
        };
    }

    toggleCompare() {
        const { isCompare } = this.state;
        const log = {
            text: 'toggle compare',
            type: LOG_INFO,
        };

        this.setState({ isCompare: !isCompare, log: log }, this.changeAlerts);
    }

    changeEqualityTypes(event) {
        const { value } = event.target;
        const log = {
            text: 'change equality types',
            type: LOG_INFO,
        };

        this.setState({ equalityTypes: value, log: log }, this.changeAlerts);
    }

    changeTool(event) {
        const { value } = event.target,
            result = parseAndLog(value),
            { obj, log } = result;

        this.setState({ toolObject: obj, toolStr: value, log: log }, this.changeAlerts);
    }

    changeObj(event) {
        const { value } = event.target,
            result = parseAndLog(value),
            { obj, log } = result;

        this.setState({ objObject: obj, objStr: value, log: log }, this.changeAlerts);
    }

    changeAlerts() {
        const { toolObject, objObject, equalityTypes, isCompare } = this.state,
            isEmpty = (obj) => Object.keys(obj).length === 0;

        if (!isEmpty(toolObject) && !isEmpty(objObject) && isCompare) {
            const alerts = equalAlerts(toolObject, objObject, equalityTypes);
            let req = 0,
                diff = 0,
                text = '';

            alerts.forEach((alert) => {
                if (!alert.scalar) return;
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

            this.setState({
                alerts: alerts,
                log: { text: text, type: LOG_INFO },
            });
        }
    }

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}

AppProvider.propTypes = {
    children: PropTypes.node,
};

export default AppProvider;
