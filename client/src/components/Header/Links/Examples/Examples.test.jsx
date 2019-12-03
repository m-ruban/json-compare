import React from 'react';
import { render } from 'enzyme';
import Examples from 'components/Header/Links/Examples';

describe('<Examples />', () => {
    it('Renders correctly', () => {
        const output = render(<Examples />);
        expect(output).toMatchSnapshot();
    });
});
