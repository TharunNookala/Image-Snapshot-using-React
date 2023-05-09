import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './Gallery';

const apikey = "03a21a6475754c35017eb8c304ef39ed";
function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const changeHandler = e => {
    setSearch(e.target.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setData(response.data.photos.photo)
    )
    console.log(search)
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <h2 className="logo"><i>Image Snapshot</i></h2>
        <form onClick={onSubmitHandler}>
          <input className="search" type="search" name="search" placeholder='enter category to search'
            onChange={changeHandler} value={search} /> <br /> <br />
          <input type="submit" name="submit" />
        </form >
      </div>
      <div className="result-panel">
        {data.length >= 1 ? <Gallery data={data} /> : <h4 className="nodata-animation">No Data Loaded <br /> Search to generate images </h4>}
      </div>
      <footer>&copy; &nbsp; Tharun Nookala &nbsp; 2023</footer >
    </div >
  );
}
export default App
