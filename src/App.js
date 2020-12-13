import React, { useState } from 'react';

function App() {
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const fetchData = (query) => 
  fetch(`/positions.json?description=${query}`)
  .then(res => res.json())
  .then(
    (result) => {
      //setIsLoaded(true);
      setData(result);
    },

    (error) => {
      //setIsLoaded(true);
      //setError(error);
    }
  )

  const onSearch = (e) => {
        e.preventDefault();
        fetchData(searchValue)
        setSearchValue('')
    }

  const onSearchInputChange = (e) => {
      setSearchValue(e.target.value.trim())
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Github Jobs</a>
      </nav>
     <div className="container">
        <form className="search-form py-5">
            <div className="form-row">
                <div className="form-group col-md-10 col-sm-10">
                    <input type="text" className="form-control" value={searchValue} onChange={onSearchInputChange} placeholder="search"/>
                </div>
                <div className="form-group col-md-2 col-sm-2"> 
                    <button onClick={onSearch} type="button" label="Search" className="btn btn-primary">Search</button>
                </div>
            </div>              
        </form>
        <ul className="list-group">
          {data.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <p className="text-align-center"><a href={item.url}>{item.title}</a></p>
              <p className="text-right">{item.company} <br/> {item.type}</p>
            </li>
          ))}
        </ul>
      </div>
      </>
      );
}

export default App;
