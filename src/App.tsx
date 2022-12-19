import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateCompany from './pages/CreateCompany';
import InventoryList from './pages/InventoryList';
import NotFound from './components/NotFound';
import Inventory from './pages/Inventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create-company' element={<CreateCompany />}></Route>
          <Route path='/inventory' element={<InventoryList />}></Route>
          <Route path='/inventory/:id' element={<Inventory />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
