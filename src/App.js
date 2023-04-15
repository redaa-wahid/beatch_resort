import './App.css';
import {Fragment, useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './padgs/Home/Home';
import {Context} from './components/Context/Context';
import {Details} from './padgs/Details/Details';
import {NavBar} from './components/NavBar/NavBar';
import Data from './Data.json';

export const productContext = createContext();

function App() {

   const [rooms, setrooms] = useState(Data);

  return (
    <BrowserRouter>
<Fragment>
<productContext.Provider value={rooms}><NavBar />
<Routes>
 <Route path="/" element={<Home/>} exact/>
 <Route path="/rooms" element={<Context/>} exact/>
 <Route path="details/:roomsId" element={<Details/>} exact/>
</Routes>
</productContext.Provider>
</Fragment>
    </BrowserRouter>
  );
}

export default App;
