import { Routes, Route,  BrowserRouter} from 'react-router-dom';
import { Auth } from './Auth';

import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { Dashboard } from '../view/pages/Dashboard';
import { AuthLayout } from '../view/layouts/Auth';
import { DashboardLayout } from '../view/layouts/Dashboard';
import AccountData from '../view/pages/AccountData';


export function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Auth isPrivate={false} />}>
          <Route element={<AuthLayout/>}>
            <Route path='*' element={<Login />}/>
            <Route path='/candidate/register' element={<Register />}/>
            <Route path='/company/register' element={<Register />}/>
          </Route>
        </Route>

        <Route element={<DashboardLayout/>}>
          <Route element={<Auth isPrivate={true} />}>
            <Route path='/chat' element={<Dashboard />}/>
          </Route>

          <Route element={<Auth isPrivate={true} userAllowed="candidate" />}>
            <Route path='/candidate/dashboard' element={<Dashboard />}/>
            <Route path='/candidate/curriculum' element={<Dashboard />}/>
            <Route path='/candidate/security' element={<Dashboard />}/>
            <Route path='/candidate/data' element={<AccountData />}/>
            <Route path='/candidate/privacy' element={<Dashboard />}/>
            <Route path='/candidate/applications' element={<Dashboard />}/>
            <Route path='/candidate/preferences' element={<Dashboard />}/>
          </Route>

          <Route element={<Auth isPrivate={true} userAllowed="company" />}>
            <Route path='/company/dashboard' element={<Dashboard />}/>
            <Route path='/company/curriculum' element={<Dashboard />}/>
            <Route path='/company/security' element={<Dashboard />}/>
            <Route path='/company/data' element={<AccountData />}/>
            <Route path='/company/privacy' element={<Dashboard />}/>
            <Route path='/company/applications' element={<Dashboard />}/>
            <Route path='/company/preferences' element={<Dashboard />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
