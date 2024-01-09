import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthProps {
  isPrivate?: boolean;
  userAllowed?: 'company' | 'candidate';
}

export function Auth({ isPrivate, userAllowed }: AuthProps) {
  const { signedIn, user } = useAuth();

  const userType = user?.isCompany ? 'company' : 'candidate'

  if(!signedIn && isPrivate){
    return <Navigate to="/login" replace/>
  }

  if(signedIn && !isPrivate){
    return <Navigate to={`/${userType}/dashboard`} replace/>
  }

  if(userAllowed && userAllowed !== userType){
    return <Navigate to={`/${userType}/dashboard`} replace/>
  }

  return <Outlet/>
}
