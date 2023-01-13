import './App.css';
import Axios from "axios"
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])

  const fetchData = (() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  })

   useEffect(() => {
  //  fetchData()
    }, [])

  const arr1 = data.map((data, index) => {
    if(data.id % 2 === 0) {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.website}</td>
      </tr>
    )}
  })

  
  const arr2 = data.map((data, index) => {
    if(data.id % 2 !== 0) {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.website}</td>
      </tr>
    )}
  })

  return (

    <div className='App'>
     <div className='btn'> <button onClick={fetchData}><span>Click</span></button> </div>
      <div className='table'>
        <table>
          <tbody>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Website</th>
            </tr>
            <h3>Even ids:</h3>
            {arr1}
            <h3>Odd ids</h3>
            {arr2}
          </tbody>
        </table>
      </div>
      <div class="circle c1"></div>
        <div class="circle c2"></div>
    </div>
  );
}

export default App;
