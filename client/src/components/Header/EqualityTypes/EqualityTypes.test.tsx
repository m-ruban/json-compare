import React from 'react';

import EqualityTypes from 'components/Header/EqualityTypes';
import { EQUALITY_TYPE_IGNORE } from 'constants/equality';
import { render } from 'enzyme';
import { Provider } from 'store/Context';

export const equalityTypesIgnore = {
    equalityTypes: EQUALITY_TYPE_IGNORE,
};

describe('<EqualityTypes />', () => {
    it('Renders correctly', () => {
        const output = render(
            <Provider value={equalityTypesIgnore}>
                <EqualityTypes />
            </Provider>,
        );
        expect(output).toMatchSnapshot();
    });
});
