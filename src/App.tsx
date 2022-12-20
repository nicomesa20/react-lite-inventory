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
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/RoleGuardRoute';
import Admin from './pages/Admin';
import RoleGuardRoute from './components/RoleGuardRoute';
import { Roles } from './models/user';
import CreateProduct from './pages/CreateProduct';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              // <PrivateRoute>
              //   <RoleGuardRoute role={Roles.EXTERNAL} redirect='/admin'>
              //     <Home />
              //   </RoleGuardRoute>
              // </PrivateRoute>
              <Home />
            }
          ></Route>
          <Route
            path='/admin'
            element={
              // <PrivateRoute>
              //   <RoleGuardRoute role={Roles.ADMIN} redirect='/'>
              //     <Admin />
              //   </RoleGuardRoute>
              // </PrivateRoute>
              <Admin />
            }
          ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/create-company'
            // element={
            //   <PrivateRoute>
            //     <AdminRoute>
            //       <CreateCompany />
            //     </AdminRoute>
            //   </PrivateRoute>
            // }
            element={<CreateCompany />}
          ></Route>
          <Route path='/inventory' element={<InventoryList />}></Route>
          <Route path='/inventory/:id' element={<Inventory />}></Route>
          <Route
            path='/inventory/:id/product'
            element={<CreateProduct />}
          ></Route>
          <Route
            path='/inventory/:id/product/:productId'
            element={<CreateProduct />}
          ></Route>
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
