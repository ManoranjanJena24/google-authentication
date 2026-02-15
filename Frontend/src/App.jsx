import './App.css'
import {BrowserRouter , Route ,Routes ,Navigate } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="981534546844-q8mnlkdu1lneukqncplc7titeq6ijr7j.apps.googleusercontent.com">
      <GoogleLogin />
    </GoogleOAuthProvider>
  );
};

function App() {

  
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
