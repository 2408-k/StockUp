import react,{ Fragment, useState, useEffect } from 'react';
import useDataApi from '../../hooks/useDataApi';

function StocksPage () {
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'https://api.twelvedata.com/time_series?symbol=AAPL,MSFT,EUR/USD,SBUX,NKE&interval=1day&apikey=442bdaebf4454412b463a6887c6c3b13',
        { hits: [] },
    );

    //console.log(data);
    var apple="AAPL";
    return (
    <Fragment>
      <h1> Welcome to Stocks Page </h1>
      {/*<form
        onSubmit={event => {
          doFetch(
            `http://hn.algolia.com/api/v1/search?query=${query}`,
          );
 
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      */}
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Stocks are Loading ...</div>
      ) : (
      
       <div> 
         <h2> Stocks Loaded </h2>
          <div> 
           <h3> Microsoft </h3>
           <div> {console.log(data.MSFT)} </div>
           <div> {console.log(data.MSFT.meta.exchange)} </div>
           <div> {console.log(data.MSFT.meta.currency)} </div>
           <div> {console.log(data.MSFT.meta.exchange)} </div>
           <div> {console.log(data.MSFT.values[0].datetime)} </div>
           <div> {console.log(data.MSFT.values[0].open)} </div>
           <div> {console.log(data.MSFT.values[0].close)} </div>
           <div> {console.log(data.MSFT.values[0].volume)} </div>
          </div>
       </div>
      )}
    </Fragment>
  );
}

export default StocksPage;