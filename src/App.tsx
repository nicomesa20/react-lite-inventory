import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
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
              <PrivateRoute>
                <RoleGuardRoute role={Roles.EXTERNAL} redirect='/admin'>
                  <Home />
                </RoleGuardRoute>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/admin'
            element={
              <PrivateRoute>
                <RoleGuardRoute role={Roles.ADMIN} redirect='/'>
                  <Admin />
                </RoleGuardRoute>
              </PrivateRoute>
            }
          ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/create-company'
            element={
              <PrivateRoute>
                <RoleGuardRoute role={Roles.ADMIN} redirect='/'>
                  <CreateCompany />
                </RoleGuardRoute>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/edit-company/:id'
            element={
              <PrivateRoute>
                <RoleGuardRoute role={Roles.ADMIN} redirect='/'>
                  <CreateCompany />
                </RoleGuardRoute>
              </PrivateRoute>
            }
          ></Route>
          <Route path='/inventory' element={<InventoryList />}></Route>
          <Route path='/inventory/:id' element={<Inventory />}></Route>
          <Route
            path='/inventory/:id/product'
            element={<CreateProduct />}
          ></Route>
          <Route
            path='/inventory/:id/product/:productId'
            element={
              <PrivateRoute>
                <RoleGuardRoute role={Roles.ADMIN} redirect='/'>
                  <CreateProduct />{' '}
                </RoleGuardRoute>
              </PrivateRoute>
            }
          ></Route>
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<Navigate to='/notfound' replace />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
