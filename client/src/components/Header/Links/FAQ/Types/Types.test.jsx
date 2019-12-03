import React from 'react';
import { render } from 'enzyme';
import Types from 'components/Header/Links/FAQ/Types';

describe('<Types />', () => {
    it('Renders correctly', () => {
        const output = render(<Types />);
        expect(output).toMatchSnapshot();
    });
});
