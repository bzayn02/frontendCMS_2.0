import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/signin-signup/Signin';
import Signup from './pages/signin-signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminVerification from './pages/signin-signup/AdminVerification';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />

        {/* Private Route */}
        <Route path="/new-admin" element={<Signup />} />
        <Route path="/admin-verification" element={<AdminVerification />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
