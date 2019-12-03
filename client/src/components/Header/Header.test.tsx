import React from 'react';

import { render } from 'enzyme';

import Header from 'components/Header';
import { Provider } from 'store/Context';
import compare from 'tests/mocks/compare';

describe('<Header />', () => {
    it('Renders correctly', () => {
        const output = render(
            <Provider value={compare}>
                <Header />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
