import React from 'react';

import Key from 'components/JSONView/ObjView/CompositeView/Value/Key';
import { render } from 'enzyme';

describe('<Key />', () => {
    it('Renders correctly', () => {
        const props = { value: 'test', isArray: false };
        const output = render(<Key {...props} />);
        expect(output).toMatchSnapshot();
    });
});
