
import {NewHeadlinePage} from './components/NewHeadlinePage'
import './App.css';
import { Navbar } from './components/Navbar';
import {  useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { useRef, useState } from 'react';



function App() {
  const filtereditems = useSelector((state) => state.show.filteredItems);
  const filteredNation = useSelector((state) => state.show.filteredNation);
  const filteredBusiness = useSelector((state) => state.show.filteredBusiness);
  const filteredHealth = useSelector((state) => state.show.filteredHealth);
  const filteredSports = useSelector((state) => state.show.filteredSports);
  const filteredWorld = useSelector((state) => state.show.filteredWorld);
  const item = useSelector((state) => state.show.items);
  const Business = useSelector((state) => state.show.Business);
  const Sports = useSelector((state) => state.show.Sports);
  const World = useSelector((state) => state.show.World);
  const Health = useSelector((state) => state.show.Health);
  const Nation = useSelector((state) => state.show.Nation);
const [search, setsearch] = useState('')
  return (
    
    <div className="App">
  
     <Navbar const search={search} setSearch={setsearch}/>
     <Routes>
<Route path='/' element={<NewHeadlinePage filtereditems={filtereditems} item={item} search={search}/>}/>
<Route path='business' element={<NewHeadlinePage filtereditems={filteredBusiness} item={Business}  search={search}/>}/>
<Route path='health' element={<NewHeadlinePage filtereditems={filteredHealth} item={Health}  search={search}/>}/>
<Route path='nation' element={<NewHeadlinePage filtereditems={filteredNation} item={Nation}  search={search}/>}/>
<Route path='world' element={<NewHeadlinePage filtereditems={filteredWorld} item={World}  search={search}/>}/>
<Route path='sports' element={<NewHeadlinePage filtereditems={filteredSports} item={Sports}  search={search}/>}/>


     </Routes>
  

    </div>
  );
}

export default App;
