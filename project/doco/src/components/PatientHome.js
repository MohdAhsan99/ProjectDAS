import React from 'react';
import '../components/animations.css';
import '../components/main.css';
import '../components/background.css';
import '../components/admin.css';

import {useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {
    const username = 'John Doe'; 
    const useremail = 'john@example.com'; 
    const doctorrow = { num_rows: 10 }; 
    const patientrow = { num_rows: 20 }; 
    const appointmentrow = { num_rows: 5 }; 
    const schedulerow = { num_rows: 8 }; 


const[ patient, setPatient ]=useState(null);
const mystate=useSelector ((state)=> state.logged);
console.log(mystate)

useEffect(()=>{

   
    // const userid=JSON.parse(localStorage.getItem("loggedUser")).user_id_;
    //       alert(userid)        
    try {
        const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
        if (storedUser && storedUser.id_) {
          const userid = storedUser.id_; 
          fetch("http://localhost:8080/getPatientByUId?user_id_=" + userid)
            .then(resp => resp.json())
            .then((obj) => {
              alert(obj.lname_);
              localStorage.setItem("loggedPatient", JSON.stringify(obj));
              setPatient(obj);
            })
            .catch(error => {
              console.error("Error fetching patient data:", error);
            });
        } else {
          console.log("User data not found in localStorage or does not have id_ property");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }, []); 
    const [doctors, setDoctors] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date()); 
const [selectedLocation, setSelectedLocation] = useState('');
const [selectedSpeciality, setSelectedSpeciality] = useState('');
const [info, setInfo] = useState([]); 
const [info1, setInfo1] = useState([]); 

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        if (selectedLocation) {
            // Fetch data from the first API based on selectedLocation
            fetch(`http://localhost:8080/getDocByLId?location_id_=${selectedLocation}`)
                .then(resp => resp.json())
                .then(data => {
                    setInfo(data);
                })
                .catch(error => {
                    console.error('Error fetching data from first API:', error);
                });
        } else if (selectedSpeciality) {
            // Fetch data from the second API based on selectedSpeciality
            fetch(`http://localhost:8080/getDocBySpId?specialities_id_=${selectedSpeciality}`)
                .then(resp => resp.json())
                .then(data => {
                    setInfo1(data);
                })
                .catch(error => {
                    console.error('Error fetching data from second API:', error);
                });
        }
    };
    
  

    return (
        <div className=" dashboard-container">
            <div className="menu" >

            <table className="menu-container"  border="0">
        <tr>
            <td style={{ padding: '10px' }} colSpan="2">
                <table border="0" className="profile-container">
                    <tr>
                        <td width="30%" style={{ paddingLeft: '20px' }}>
                            <img src="../img/user.png" alt="" width="100%" style={{ borderRadius: '50%' }} />
                        </td>
                        <td style={{ padding: '0px', margin: '0px' }}>
                            <p className="profile-title">{patient && patient.fname_}..</p>
                            <p className="profile-subtitle">{patient && patient.email_} </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <a href="/"><input type="button" value="Log out" className="logout-btn btn-primary-soft btn" /></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <tr className="menu-row">
            <td className="menu-btn menu-icon-home menu-active menu-icon-home-active">
                <a href="index.php" className="non-style-link-menu non-style-link-menu-active">
                    <div><p className="menu-text">Home</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-doctor">
                <a href="/Dhame" className="non-style-link-menu">
                    <div><p className="menu-text">All Doctors</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-session">
                <a href="schedule.php" className="non-style-link-menu">
                    <div><p className="menu-text">Scheduled Sessions</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-appoinment">
                <a href="appointment.php" className="non-style-link-menu">
                    <div><p className="menu-text">My Bookings</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-settings">
                <a href="settings.php" className="non-style-link-menu">
                    <div><p className="menu-text">Settings</p></div>
                </a>
            </td>
        </tr>
        {/* Other menu rows */}
    </table>

 </div>
            <div className="dash-body"  style={{ marginTop: '15px'}}>
                <table style={{ borderSpacing: 0, margin: 0, padding: 0, width: '100%' }}>
                    <tbody>
                        <tr>
                            <td colSpan="1" className="nav-bar">
                               
                            </td>
                            <td width="25%">
                                {/* Empty column */}
                            </td>
                            <td width="15%">
                                <p style={{ fontSize: '14px', color: 'rgb(119, 119, 119)', padding: 0, margin: 0, textAlign: 'right' }}>
                                    Today's Date
                                </p>
                                <p className="heading-sub12" style={{ padding: 0, margin: 0 }}>
                                    
                                    {/* Date */}
                                </p>
                            </td>
                            <td width="10%">
                                <button className="btn-label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="../img/calendar.svg" width="100%" alt="Calendar" /></button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <center>
                                    <table className="filter-container doctor-header patient-header" style={{ border: 'none', width: '95%' }} border="0">
                                        <tr>
                                            <td>
                                                <h1 className="text-center"><p>Welcome {patient && patient.fname_} {patient && patient.lname_}</p></h1>
                                              {/*}  <p>Haven't any idea about doctors? No problem, let's jump to{' '}
                                                    <a href="doctors.php" className="non-style-link">
                                                        <b>"All Doctors"</b>
                                                    </a> section or{' '}
                                                    <a href="schedule.php" className="non-style-link">
                                                        <b>"Sessions"</b>
                                                    </a>
                                                    <br />
                                                    Track your past and future appointments history.
                                                    <br />
                                                    Also find out the expected arrival time of your doctor or medical consultant.
                                                    <br /><br />
                                                     </p>*/}
                                                     <h3>Ease scheduling pains with a doctor</h3>
                                                  <h3>appointment booking app.</h3><br/>
                                                  <p>Empower your patients to book or reschedule appointments online 24/7.<br/>
                                                   Reduce average booking time from 8+ minutes by phone* to just a few clicks.</p>
                                              {/*  <h3>Channel a Doctor Here</h3>
                                                <form action="" method="post" style={{ display: 'flex' }}>
                                                    <input type="search" name="search" className="input-text" placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{ width: '45%' }} />&nbsp;&nbsp;*/}
                                                     <form onSubmit={handleFormSubmit}>&nbsp;&nbsp;
                                                    
                                                   <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)}> 
                                                        <option value="select">Select Area</option>
                                                        <option value="1">Pimpri-Chinchwad</option>
                                                        <option value="2">Viman Nagar</option>
                                                        <option value="3">Baner</option>
                                                        <option value="4">Koregoan Park</option>
                                                        <option value="5">Hadapsar</option>
                                                        <option value="6">Kothrud</option>
                                                        <option value="7">kharadi</option>
                                                        <option value="8">Hinjewadi</option>
                                                        <option value="9">Shivaji Nagar</option>
                                                        <option value="10">Deccan</option>
                                                        <option value="11">kondwa</option>
                                                </select> &nbsp;&nbsp;
                                             {/*   <select value={selectedSpeciality} onChange={(event) => setSelectedSpeciality(event.target.value)}>
                                                        <option value="select">Select Sepciality</option>
                                                        <option value="1">Dermatology</option>
                                                        <option value="2">Cardiology</option>
                                                        <option value="3">Neurology</option>
                                                        <option value="4">Orthopedics</option>
                                                        <option value="5">Gynaecology</option>
                                                        <option value="6">Oncologist</option>
                                                        <option value="7">Gastroenterologist</option>
                                                        <option value="8">Pediatrics</option>
                                                        <option value="9">Radiology</option>
                                                        <option value="10">Endocrinologists</option>
                                            
                                            
                                                </select>*/}
                                                    <input type="Submit" value="Search" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }} />&nbsp;&nbsp;
                                                </form>                                                                                                                                         
                                                <br />
                                                <br />
                                            </td>
                                        </tr>
                                    </table>
                                </center>
                            </td>
                        </tr>
                       <tr>
                            <td colSpan="4">
                                <div  className="filter-container" style={{ border: 'none',backgroundColor: 'lightgray', textAlign: 'center'  }} border="0">
                                <h1>Doctor List</h1>
                                <div style={{ margin: '20px' }} className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr  >
                                        <th className="bg-primary text-Dark">Name</th>
                                        <th className="bg-primary text-Dark">Email</th>
                                        <th className="bg-primary text-Dark">Gender</th>
                                        <th className="bg-primary text-Dark">Experience</th>
                                        <th className="bg-primary text-Dark">Qualification</th>
                                        <th className="bg-primary text-Dark">Address</th>
                                        <th className="bg-primary text-Dark">Contact</th>
                                        <th className="bg-primary text-Dark">Description</th>
                                        <th className="bg-primary text-Dark">Booking</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {info.map(info => (
                                        <tr key={info.id_}>
                                        <td className="bg-light text-Dark">{info.fname_} {info.lname_}</td>
                                        <td className="bg-light text-Dark">{info.email_}</td>
                                        <td className="bg-light text-Dark">{info.gender_}</td>
                                        <td className="bg-light text-Dark">{info.experience_} years</td>
                                        <td className="bg-light text-Dark">{info.qualification_}</td>
                                        <td className="bg-light text-Dark">{info.address_}</td>
                                        <td className="bg-light text-Dark">{info.contact_}</td>
                                        <td className="bg-light text-Dark">{info.description_}</td>
                                        <td className="bg-light text-Dark">{'/phame'}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Dashboard;
