import * as React from 'react';
import { shallow } from 'enzyme'
import JobList from './JobList';

describe('JobList Tests', () => {
    const jobItems = [
        {
            "id":1,
            "title":"senoir software engineer"
        },
        {
            "id":2,
            "brand":"quality engineer"
        }]          
        
    it('should render loading text', () => {
      const component = shallow(<JobList items={jobItems} isLoading={true} errorMessage={null} />);
      expect(component.find('div').hasClass('col-12 text-white text-center')).toBe(true);
      expect(component.find('div').text()).toEqual('Loading...');
    })

    it('should render no result', () => {
        const component = shallow(<JobList items={[]} isLoading={false} total={0} />);
        expect(component.find('div').last().text()).toEqual('Not found product..');
    })

    it('should render error message', () => {
        const component = shallow(<JobList items={[]} errorMessage={'error'} />);
        expect(component.find('div').last().text()).toEqual('error');
    })

    it('should render job list', () => {
        const component = shallow(<JobList items={jobItems} isLoading={false} />);
        expect(component.find('ul').hasClass('list-group')).toBe(true);
    })
})