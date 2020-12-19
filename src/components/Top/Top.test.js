import * as React from 'react';
import { shallow } from 'enzyme'
import Top from './Top';

describe('Top Panel Tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Top/>);
  })

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  })

  it('should render logo text', () => {
    expect(component.find("strong").text()).toEqual("Github Job Search");
  })
})