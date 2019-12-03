import React from 'react';

import PrimitiveType from 'components/JSONView/ObjView/PrimitiveType';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alerts from 'tests/mocks/alerts';

describe('<PrimitiveType />', () => {
    it('Renders correctly', () => {
        const props = { value: 'test', showAlerts: false, showRequired: false, path: [] };
        const output = render(
            <Provider value={alerts}>
                <PrimitiveType {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
