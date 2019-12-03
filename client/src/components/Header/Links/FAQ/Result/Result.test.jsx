import React from 'react';
import { render } from 'enzyme';
import Result from 'components/Header/Links/FAQ/Result';

describe('<Result />', () => {
    it('Renders correctly', () => {
        const output = render(<Result />);
        expect(output).toMatchSnapshot();
    });
});
