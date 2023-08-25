import React, { startTransition } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';

import App1 from './components/Home';

import LoginComp from './components/LoginComp';

import './App.css'; 
import PatientReges from './components/PatientRegistrationF';
import Home from './components/Home';
import PatientHome from './components/PatientHome';
import Dashboard from './components/PatientHome';


function App() {
 
   
  const location = useLocation();
  const hiddenRoutes = ['/login', '/patient', '/doctor', '/Phame', '/Dhame', '/Ahame'];
  const shouldShowNavBar = !hiddenRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBar && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link className="navbar-brand" to="/">
                  HOME
                </Link>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient">
                    PATIENT_REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor">
                    DOCTOR_REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Phame">
                    p-Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Dhame">
                    D-Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Ahame">
                    A-Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/patient" element={<PatientReges />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/doctor" element={''} />
          <Route path="/logic" element={'' }/>
          <Route path="/home" element={''} />
          <Route path="/Phame" element={<Dashboard/>} />
          <Route path="/Dhame" element={''} />
          <Route path="/Ahame" element={''} />
          <Route path="/viewDocA" element={''} />
          <Route path="/ViewDoctorComp" element={''} />
          <Route path="/AdminViewPatientsComp" element={''} />
          <Route path="/viewAllPatientInfo" element={''} />
          <Route path="/viewSchedules" element={''} />
          <Route path="/requestA" element={''} />
        </Routes>
      </div>
    </div>
  ); 
 
    
}

export default App;
