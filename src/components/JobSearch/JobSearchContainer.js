import * as React from 'react';
import { JobSearch } from '../JobSearch/JobSearch';
import JobList from './JobList/JobList';

class JobSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            isLoading: false,
            items: [],
            error: null,
            total: null
        }
    }

    fetchJob = async (query) => {
        this.setState({ isLoading: true })
        const apiUrl = '/positions.json?description=';

        try {
            const res = await fetch(apiUrl + query);
            const data = await res.json();

            this.setState({
                items: data,
                isLoading: false,
                total: data.length
            })
        } catch (error) {
            this.setState({ error, isLoading: false})
        }

    }

    onSearchInputChange = (e) => {
        this.setState({ searchValue: e.target.value.trim()})
    }

    resetInput = () => {
        this.setState ({ searchValue: '' })
    }

    onSearch = (e) => {
        e.preventDefault();
        this.fetchJob(this.state.searchValue)
        this.resetInput()
    }

    render() {
        const { searchValue, items, isLoading, error, total, showItems} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <JobSearch
                        searchValue={searchValue}
                        onSearch={this.onSearch} 
                        onSearchInputChange={this.onSearchInputChange}/>
                    <JobList  
                        items={items} 
                        isLoading={isLoading}
                        errorMessage={error}
                        total={total}
                        pageSize={showItems}
                    />
                </div>
            </div> 
        )
    }
}

export default JobSearchContainer;