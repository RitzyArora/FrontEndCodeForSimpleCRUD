import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
  
    <div className="App">
       <Router>
       <Navbar/> 
       <Routes>    
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/addUser" element={<AddUser/>}></Route>
          <Route exact path="/editUser/:id" element={<EditUser/>}></Route>
          <Route exact path="/viewUser/:id" element={<ViewUser/>}></Route>
          </Routes>
       </Router>
          
  
    
    </div>
  );
}

export default App;
