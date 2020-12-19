import * as React from 'react';
import { Button } from '../common/Button/Button';

const JobSearch = (props) => {
    const { searchValue, onSearch, onSearchInputChange } = props;
    return (
        <div className="col-md-12">
            <form className="search-form py-5">
                <div className="form-row">
                    <div className="form-group col-md-10 col-sm-10">
                        <input type="text" className="form-control" value={searchValue} onChange={onSearchInputChange} placeholder="search"/>
                    </div>
                    <div className="form-group col-md-2 col-sm-2"> 
                        <Button onClick={onSearch} label="Search" className={"btn-primary btn-block"}/>
                    </div>
                </div>              
            </form>
        </div>
    )
}

export {JobSearch}