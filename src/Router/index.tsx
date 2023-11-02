import { Routes, Route,  BrowserRouter} from 'react-router-dom';
import { Auth } from './Auth';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { Dashboard } from '../view/pages/Dashboard';
import { AuthLayout } from '../view/layouts/Auth';

export function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Auth isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Route>
        </Route>

        <Route element={<Auth isPrivate={true} />}>
          <Route path='/' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
