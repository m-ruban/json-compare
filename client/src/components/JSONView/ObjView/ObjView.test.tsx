import React from 'react';

import ObjView from 'components/JSONView/ObjView';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alerts from 'tests/mocks/alerts';

describe('<ObjView />', () => {
    it('Renders correctly', () => {
        const props = { value: [], showAlerts: false, showRequired: false, path: [] };
        const output = render(
            <Provider value={alerts}>
                <ObjView {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
    it('Renders correctly (obj)', () => {
        const props = { value: {id: 1}, showAlerts: false, showRequired: false, path: [] };
        const output = render(
            <Provider value={alerts}>
                <ObjView {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
