import * as React from 'react';
import { shallow } from 'enzyme'
import { Button } from './Button';

describe('Button Tests', () => {
  it('should render correctly', () => {
    const component = shallow(<Button/>);
    expect(component).toMatchSnapshot();
  })

  it('should render default class name correctly', () => {
    const component = shallow(<Button />);
    expect(component.hasClass('btn btn-primary')).toBe(true);
  })

  it('should render class name correctly', () => {
    const component = shallow(<Button className={'btn-block'} />);
    expect(component.hasClass('btn btn-block')).toBe(true);
  })

  it('should render label correctly', () => {
    const component = shallow(<Button label={'Search'} />);
    expect(component.contains("Search")).toBe(true);
  })

  it('should call onClick func', () => {
    const mockOnClick = jest.fn();
    const button = shallow(<Button onClick={mockOnClick} />);
    button.find('button').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  })
})
