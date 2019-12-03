import React from 'react';

import Log from 'components/Footer/Log';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import { emptyLog, exampleLog } from 'tests/mocks/log';

describe('<Log />', () => {
    it('Renders correctly (empty log)', () => {
        const output = render(
            <Provider value={emptyLog}>
                <Log />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
    it('Renders correctly (not empty log)', () => {
        const output = render(
            <Provider value={exampleLog}>
                <Log />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
