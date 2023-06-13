
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Add from './Component/Add';
import Home from './Component/Home';
import Update from './Component/Update';
import Read from './Component/Read';
import Delete from './Component/Delete';
import List from './Component/List';


function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Read" element={<Read/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/List" element={<List/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
