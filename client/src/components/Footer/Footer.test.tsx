import React from 'react';

import { render } from 'enzyme';

import Footer from 'components/Footer';
import { Provider } from 'store/Context';
import feedback from 'tests/mocks/feedback';
import { emptyLog } from 'tests/mocks/log';

const initialState = {
    ...emptyLog,
    ...feedback,
};

describe('<Footer />', () => {
    it('Renders correctly', () => {
        const output = render(
            <Provider value={initialState}>
                <Footer />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
