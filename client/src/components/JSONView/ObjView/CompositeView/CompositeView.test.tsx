import React from 'react';

import CompositeView from 'components/JSONView/ObjView/CompositeView';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alertsExample from 'tests/mocks/alerts';

describe('<CompositeView />', () => {
    it('Renders correctly', () => {
        const props = { obj: {id: 1}, lvl: 1, path: [], showAlerts: false, showRequired: false, isArray: false };
        const output = render(
            <Provider value={alertsExample}>
                <CompositeView {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
