import React from 'react';

import JSONView from 'components/JSONView';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alerts from 'tests/mocks/alerts';

describe('<ObjView />', () => {
    it('Renders correctly', () => {
        const props = { obj: [], showAlerts: false, showRequired: false };
        const output = render(
            <Provider value={alerts}>
                <JSONView {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
    it('Renders correctly (obj)', () => {
        const props = { obj: {id: 1}, showAlerts: false, showRequired: false };
        const output = render(
            <Provider value={alerts}>
                <JSONView {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
