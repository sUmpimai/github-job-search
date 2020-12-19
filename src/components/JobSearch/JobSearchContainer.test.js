import * as React from 'react';
import { shallow , mount} from 'enzyme'
import JobSearchContainer from './JobSearchContainer';
import { JobSearch } from './JobSearch';
import { Button } from '../common/Button/Button';

describe('JobSearchContainer Tests', () => {
    beforeEach(() => {})
    it('fetch jobs list success', done => {
        const mockSuccessRes = [
            {
                "id":1,
                "title":"senoir software engineer"
            },
            {
                "id":2,
                "brand":"quality engineer"
            }]                        
        
        const mockJsonPromise = Promise.resolve(mockSuccessRes);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        })

        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const component = shallow(<JobSearchContainer/>)

        component.instance().fetchJob("python");
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            "/positions.json?description=python"
        );

        process.nextTick(() => {
            expect(component.state()).toEqual({
                items: [
                    {
                        "id":1,
                        "title":"senoir software engineer"
                    },
                    {
                        "id":2,
                        "brand":"quality engineer"
                    }
                ],
                searchValue: '',
                isLoading: false,
                error: null,
                total: 2
            })
        })
        global.fetch.mockClear();
        done();
    })

    it('fetch product failure', done => {
        const mockJsonPromise = Promise.reject('error');

        global.fetch = jest.fn().mockImplementation(() => mockJsonPromise);

        const component = shallow(<JobSearchContainer/>)

        component.instance().fetchJob("python");
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            "/positions.json?description=python"
        );

        process.nextTick(() => {
            expect(component.state()).toEqual({
                items: [],
                searchValue: '',
                isLoading: false,
                error: 'error',
                total: null
            })
        })
        global.fetch.mockClear();
        done();
    })

    describe('Iternal functions', () => {
        let component;
        beforeEach(() => {
            component = shallow(<JobSearchContainer/>)
        })

        it('onSearchInputChange', () => {
            const event = {
                preventDefault() {},
                target: { value: 'cream' }
              };
           component.instance().onSearchInputChange(event);
           expect(component.state('searchValue')).toEqual('cream');
        })
    
        it('resetInput', () => {
            component.setState( { searchValue: "cream"});
            component.instance().resetInput();
            expect(component.state('searchValue')).toEqual('');
        })
    
        it('onSearch', () => {
            const mockOnSearch = jest.fn();
            shallow(<JobSearch onSearch={mockOnSearch}/>);
            const button = mount(<Button onClick={mockOnSearch} />);
            button.find("button").simulate('click');
            expect(mockOnSearch).toHaveBeenCalledTimes(1);
        });
    })

})