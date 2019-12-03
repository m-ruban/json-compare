import React from 'react';
import { render } from 'enzyme';
import FAQ from 'components/Header/Links/FAQ';

describe('<FAQ />', () => {
    it('Renders correctly', () => {
        const output = render(<FAQ />);
        expect(output).toMatchSnapshot();
    });
});
