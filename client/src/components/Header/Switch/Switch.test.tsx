import React from 'react';

import { render } from 'enzyme';

import Switch from 'components/Header/Switch';
import { Provider } from 'store/Context';
import compare from 'tests/mocks/compare';

describe('<Switch />', () => {
    it('Renders correctly', () => {
        const output = render(
            <Provider value={compare}>
                <Switch />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
