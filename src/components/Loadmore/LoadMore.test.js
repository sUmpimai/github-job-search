import * as React from 'react';
import { shallow } from 'enzyme'
import { LoadMore } from './LoadMore';

describe('LoadMore Tests', () => {
    it('should render correctly', () => {
      const component = shallow(<LoadMore/>);
      expect(component).toMatchSnapshot();
    })

    it('should not render button when product total is less than 4', () => {
        const component = shallow(<LoadMore total={3} isLoading={true}/>);
        expect(component.find('button').exists()).toBeFalsy;
    })

    it('should not render button when product total is greater than 4', () => {
        const component = shallow(<LoadMore total={5} isLoading={false}/>);
        expect(component.find('button').exists()).toBeTruthy;
    })
})