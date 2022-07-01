import './App.css';
import {useState} from 'react'
import Categories from './components/Categories';
import Content from './components/Content';
import DisplayPic from './components/DisplayPic';
import Navbar from './components/Navbar';
function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
     <Navbar setLogin={setLogin} login={login}/>
     <DisplayPic/>
     <Categories/>
     <Content login={login}/>
    </div>
  );
}

export default App;
