import React from 'react';

import Value from 'components/JSONView/ObjView/CompositeView/Value';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alertsExample from 'tests/mocks/alerts';

describe('<Value />', () => {
    it('Renders correctly', () => {
        const props = { obj: {}, lvl: 1, path: [], showAlerts: false, showRequired: false, isArray: false };
        const output = render(<Value {...props} />);
        expect(output).toMatchSnapshot();
    });
    it('Renders correctly (obj)', () => {
        const props = { obj: {id: 1}, lvl: 1, path: [], showAlerts: false, showRequired: false, isArray: false };
        const output = render(
            <Provider value={alertsExample}>
                <Value {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
