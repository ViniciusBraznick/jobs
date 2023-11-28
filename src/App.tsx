import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Router } from "./Router"
import { globalStyles } from "./view/styles/globalStyles";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';


const queryClient = new QueryClient();

function App() {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <Toaster toastOptions={{
        style: {
          background: '#363636',
          color: '#fff',
          fontFamily: 'var(--fonts-outfit)'
        }
      }}/>
    </QueryClientProvider>
  )
}

export default App
