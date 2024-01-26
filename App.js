

import Header from './header';
import List from './Content';
import Table from './Table';
import { useState, useEffect } from 'react';
function App() {
  const [stateA, setstateA] = useState(false)
  const [stateB, setstateB] = useState(false)
  const [stateC, setstateC] = useState(false)
  const [list, setlist] = useState([])

  const handleStateA = () => {
    setstateA(true)
    setstateB(false)
    setstateC(false)
  }
  const handleStateB = () => {
    setstateA(false)
    setstateB(true)
    setstateC(false)
  }
  const handleStateC = () => {
    setstateA(false)
    setstateB(false)
    setstateC(true)
  }

  useEffect(() => {
    const fetchList = async () => {
      let url;
      if(stateA){
        url = 'https://jsonplaceholder.typicode.com/users';
      }
      else if(stateB){
        url = 'https://jsonplaceholder.typicode.com/posts';
      }
      else if(stateC){
        url = 'https://jsonplaceholder.typicode.com/comments';
      }
      console.log(url + 'url not met')
      if (url) {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setlist(data)
      }
    }
    fetchList();
  },[stateA, stateB, stateC])

  return (
    <div className="App">
     <Header
    handleStateA={handleStateA}
    handleStateB={handleStateB}
    handleStateC={handleStateC}
     />
     <Table
     
     list ={list} />

    
    </div>
  );
}

export default App;
