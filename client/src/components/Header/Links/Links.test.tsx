import React from 'react';

import { render } from 'enzyme';

import Links from 'components/Header/Links';
import { Provider } from 'store/Context';
import feedback from 'tests/mocks/feedback';

describe('<Links />', () => {
    it('Renders correctly', () => {
        const output = render(
            <Provider value={feedback}>
                <Links />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
