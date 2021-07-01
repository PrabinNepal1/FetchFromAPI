import React, {useState, useEffect} from "react";

function App() {

  const [data, setData] = useState(null);


  async function getData()
    {
        //await the response of the fetch call
       let response = await fetch('https://api.github.com/users');
        //proceed once the first promise is resolved.
       let data = await response.json()
        //proceed only when the second promise is resolved
        return data;
    }

  useEffect(() => {
    getData()
    .then(data => setData(data));
  },[])


  return (
    <div className="App">
    <div><h2>Fetch From API</h2></div>
    <div className="fetchedData">
    {data && data.map((data, index) => {
      return(
          <div className="data" key={index}>
            <h3>{data.login}</h3>
          </div>
      );

    })}
    </div>
    </div>
  );
}

export default App;
