import React from 'react';

import InputWithPanel from 'components/InputWithPanel';
import { render } from 'enzyme';
import { Provider } from 'store/Context';
import alertsExample from 'tests/mocks/alerts';

describe('<InputWithPanel />', () => {
    it('Renders correctly', () => {
        const props = { str: '', change: () => null, showPanel: true };
        const output = render(
            <Provider value={alertsExample}>
                <InputWithPanel {...props} />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
