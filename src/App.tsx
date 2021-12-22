import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

import axios from "axios";

export interface IState{
  people:{
    id:number,
    name:string,
    email:string,
    title:string,
    image?:string,
    isEdit?:boolean
  }[]
}
function App() {
  const [number,setNumber] =useState<number | string | boolean>(5)
  const [people, setPeople] = useState<IState["people"]>([
  
  ])
  // const [people,setPeople] =useState<IState["people"]>([])

  // people.map(person=>{
  //   person.age=20
  // })


  React.useEffect(() => {
    axios.get('http://localhost:3333/getPeoples').then((response) => {
      console.log('response',response)
      setPeople(response.data)
    });
  }, []);

  const changeNumber =()=>{
    setNumber(true)  //setNumber(10) / setNumber("10") 
  }
  return (
    <div className="App">


      <h1>
        List
      </h1>
      <List setPeople={setPeople} people={people}/>
      {/* <AddToList setPeople={setPeople} people={people}/> */}

    </div>
  );
}

export default App;
