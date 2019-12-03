import React from 'react';

import Mark from 'components/Mark';
import { render } from 'enzyme';

describe('<Mark />', () => {
    it('Renders correctly (pill false)', () => {
        const props = { type: 'number', text: 'test', pill: false, onClick: () => null };
        const output = render(<Mark {...props} />);
        expect(output).toMatchSnapshot();
    });
    it('Renders correctly (pill true)', () => {
        const props = { type: 'number', text: 'test', pill: true, onClick: () => null };
        const output = render(<Mark {...props} />);
        expect(output).toMatchSnapshot();
    });
});
