import { Routes, Route,  BrowserRouter} from 'react-router-dom';
import { Auth } from './Auth';
import { Login } from '../view/pages/Login';
import { UserRegister } from '../view/pages/UserRegister';
import { Dashboard } from '../view/pages/Dashboard';
import { AuthLayout } from '../view/layouts/Auth';
import { CompanyRegister } from '../view/pages/CompanyRegister';

export function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Auth isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />}/>
            <Route path='/user/register' element={<UserRegister />}/>
            <Route path='/company/register' element={<CompanyRegister />}/>
          </Route>
        </Route>

        <Route element={<Auth isPrivate={true} />}>
          <Route path='/' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
