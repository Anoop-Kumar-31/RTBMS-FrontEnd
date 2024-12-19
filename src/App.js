import React from 'react';
import './App.css';
import{Route,Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Nav from './Components/Nav';
import ApplyForBlood from './Components/ApplyForBlood'
import Form from './Components/Form'
import AboutUs from './Components/AboutUs';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';

//Routing all the pages/component using Navigation bar
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/ApplyForBlood" element={<ApplyForBlood/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;