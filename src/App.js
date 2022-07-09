
import './App.css';
import Catagory from './Catagory';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SinglePage from './SinglePage';
function App() {
  return (
    <div className="App  ">
        <BrowserRouter>
   <div>
     <Routes>
     
       <Route path="/" element={<Catagory />} />
       <Route path="/home" element={<Catagory />} />
       <Route path="/singlepage/:id" element={ <SinglePage/> } />
       
     </Routes>
   </div>
 </BrowserRouter>
    </div>
  );
}

export default App;
