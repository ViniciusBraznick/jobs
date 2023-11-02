import { Navigate, Outlet } from "react-router-dom";

interface AuthProps {
  isPrivate: boolean;
}

export function Auth({ isPrivate }: AuthProps) {
  const signedIn = false;


  if(!signedIn && isPrivate){
    return <Navigate to="/login" replace/>
  }

  if(signedIn && !isPrivate){
    return <Navigate to="/" replace/>
  }

  return <Outlet/>
}
