import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState();

  useEffect(()=>{
    backendCall();
  },[])

  const backendCall = () => {
    fetch('http://127.0.0.1:8000/playground/hello/',{
      method: 'GET',
      mode: 'cors',
    })
    .then(response => 
      {response.text();
      console.log(response)})
    .then(data => {
      setData(data);
      // console.log(data);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" 
        // onClick={backendCall}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          The response from backend is {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
