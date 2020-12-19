import React from 'react';

const JobList = (props) => {
    const { items, isLoading, errorMessage, total } = props;

    if (isLoading && !errorMessage) {
        return <div className="col-12 text-white text-center">Loading...</div>;
    }

    return ( 
        <div className="col-12 text-white">
            {(total === 0 && !isLoading) && <div className="text-center">Not found product..</div>}
            {errorMessage && <div>{errorMessage}</div>}
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <p className="text-align-center"><a href={item.url}>{item.title}</a></p>
                    <p className="text-right">{item.company} <br/> {item.type}</p>
                    </li>
                ))}
            </ul> 
        </div>
    )
}

export default JobList;