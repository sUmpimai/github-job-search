import * as React from 'react';

const LoadMore = (props) => {
    const { isLoading, onClick, total } = props;
    const showBtn = () => {
        return (total > 4 && !isLoading ) && <button className="btn btn-primary btn-block mb-3 mx-3" onClick={onClick}>Show more!</button>
    }
    return (
        showBtn()
    );
}

export {LoadMore};