import React from 'react';

import Type from 'components/JSONView/ObjView/CompositeView/Value/Type';
import { render } from 'enzyme';

describe('<Key />', () => {
    it('Renders correctly', () => {
        const props = { value: 'test' };
        const output = render(<Type {...props} />);
        expect(output).toMatchSnapshot();
    });
});
