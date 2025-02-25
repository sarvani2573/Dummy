
import './App.css';
import Api from './components/api';
import FilterList1 from './components/fetch';
import FilterList from './components/usestate';

function App() {
  return (
    <div className="App">
     
     <FilterList/>
     <FilterList1/>

     <Api/>

    </div>
  );
}

export default App;
