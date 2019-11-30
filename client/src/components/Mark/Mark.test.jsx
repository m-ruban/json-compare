import React from 'react';
import { render } from 'enzyme';
import Mark from 'components/Mark/index';

describe('<Mark />', () => {
    it('Renders correctly', () => {
        const props = { type: 'number', text: 'test', pill: false, onClick: () => {} };
        const output = render(<Mark {...props} />);
        expect(output).toMatchSnapshot();
    });
});
