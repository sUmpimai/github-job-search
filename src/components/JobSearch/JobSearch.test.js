import * as React from 'react';
import { shallow } from 'enzyme'
import { JobSearch } from './JobSearch';
import { Button } from '../common/Button/Button';

describe('ProductSearch Tests', () => {
    it('should render correctly', () => {
        const component = shallow(<JobSearch/>);
        expect(component).toMatchSnapshot();
    })

    it('should have button and input', () => {
        const component = shallow(<JobSearch/>);
        expect(component.contains(<Button/>)).toBeTruthy;
        expect(component.find('input')).toHaveLength(1);
    })
})