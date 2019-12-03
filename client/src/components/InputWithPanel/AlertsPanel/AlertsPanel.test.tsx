import React from 'react';

import AlertsPanel from 'components/InputWithPanel/AlertsPanel';
import { render } from 'enzyme';
import { Provider} from 'store/Context';
import alertsExample from 'tests/mocks/alerts';

describe('<AlertsPanel />', () => {
    it('Renders correctly (pill false)', () => {
        const output = render(
            <Provider value={alertsExample}>
                <AlertsPanel />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
