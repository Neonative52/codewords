import {Routes, Route} from 'react-router-dom';
import Homepage from "./components/Homepage";
import JoinRoom from "./components/JoinRoom";
import Room from "./components/Room";
import Layout from './components/Layout';

function App() {
  const words = [
    "Genius","Death","Trip","SkyScraper","Teacher","Bottle","Pistol","Drop","Mercury","France","Calf","Oil","Tap","Agent","Fall","Key","Boom","Tower","Life","Mine","Drill","Litter","Log","Field","Limousine"
  ];
  
  const decideColor = () => {
    const num = Math.floor(Math.random()*3);
    if(num===0) {
      return "red";
    }
    else if(num===1) {
      return "blue";
    } 
    return "grey"
  }
  const revealWords = words.map((item) => {
      return [ 
          item,
          decideColor()
    ]
  })

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Homepage />} />
        <Route path="room">
          <Route index element = {<JoinRoom />} />
          <Route path='play'>
            <Route index element = {<Room revealWords={revealWords}/>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
