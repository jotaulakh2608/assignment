
import './App.css';
import { MainComponent } from './components/MainComponent';
import { Sidebar } from './components/Sidebar';

function App() {



  return (
    <div className="App">
    <div className="bg-blue-500 h-72">

    </div>
     <div className="bb flex p-3 absolute top-0 w-full">
    
<Sidebar/>
      
      
<MainComponent/>
      
     </div>
    </div>
  );
}

export default App;
