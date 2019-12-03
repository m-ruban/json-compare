import React from 'react';

import Alert from 'components/JSONView/ObjView/PrimitiveType/Alert';
import { render } from 'enzyme';
import alerts from 'tests/mocks/alerts';

describe('<Alert />', () => {
    it('Renders correctly', () => {
        const props = { alert: alerts.alerts.get('test'), showAlerts: false, showRequired: false };
        const output = render(<Alert {...props} />);
        expect(output).toMatchSnapshot();
    });
});
