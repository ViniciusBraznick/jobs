import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthProps {
  isPrivate: boolean;
}

export function Auth({ isPrivate }: AuthProps) {
  const { signedIn } = useAuth();

  if(!signedIn && isPrivate){
    return <Navigate to="/login" replace/>
  }

  if(signedIn && !isPrivate){
    return <Navigate to="/" replace/>
  }

  return <Outlet/>
}
