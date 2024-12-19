import React, { useState } from "react";
import EmailVerification from "./EmailVerification";
// import { useNavigate } from 'react-router-dom';
import '../App.css'
import Swal from 'sweetalert2';
export default function Form(){
    // const [name, setName] = useState('');
    // const [bloodtype, setBloodType] = useState('');
    // const [pin, setPin] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [state, setState] = useState('');
    // const [age, setAge] = useState('');
    const [donors, setDonors] = useState([]);
    const [currentInfo, setCurrentInfo]= useState({});
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries())
        console.log(value)
        const valueDATA={
            name:`${value["name"]}`,
            bloodtype:`${value["bloodgroup"]}`,
            pin:`${value["pincode"]}`,
            phone:`${value["phone"]}`,
            email:`${value["email"]}`,
            address:`${value["city"]+", "+value["state"]}`,
            state:`${value["state"]}`,
            age:`${value["age"]}`
        }
        console.log(valueDATA)
        let bloodGroup=value["bloodgroup"]
        if(bloodGroup.length>2){
            bloodGroup = bloodGroup.charAt(0) +bloodGroup.charAt(1)+ (bloodGroup.charAt(2) === "+" ? "1" : "0");
        }else{
            bloodGroup = bloodGroup.charAt(0)+ (bloodGroup.charAt(1) === "+" ? "1" : "0");
        }

        fetch(`https://realtime-blood-management-system.onrender.com/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(valueDATA)
          })
            .then((response) => response.json())
            .then((data) => {
              const swal = Swal.mixin({
                timer: 2000, // Time in milliseconds
                buttons: false, // Disable buttons
                customClass: {
                  container: 'swal-container',
                  popup: 'swal-popup',
                  title: 'swal-title',
                  text: 'swal-text',
                },
              });
              
              if (data.success) {
                swal.fire({
                  title: 'Registration successful!',
                  text: 'You have been successfully registered.',
                  icon: 'success',
                });
                // const navigate = useNavigate();
                // setTimeout(() => {
                //     navigate('/home');
                // }, 2000);
              } else {
                swal.fire({
                  title: 'Registration failed.',
                  text: 'Please try again.',
                  icon: 'warning',
                });
              }
            })
            .catch((error) => console.error(error));
    }
    return(
        [
        <EmailVerification name={currentInfo.name}/>,
        <div class='formBox'>
            <h1 className="heading" style={{fontSize:'7vh'}}>Register as Donor</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label><br/>
                <input type="text" id="name" name="name" placeholder="Your name.."/><br/>
                <label for="email">Email</label><br/>
                <input type="email" id="email" name="email" placeholder="Your email.."/><br/>
                <label for="phone">Phone</label><br/>
                <input type="tel" id="phone" name="phone" placeholder="Your phone.."/><br/>
                <label for="age">Age</label><br/>
                <input type="number" id="age" name="age" placeholder="Your age.."/><br/>
                <label for="bloodgroup">Blood Group</label><br/>
                <select id="bloodgroup" name="bloodgroup">
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select><br/>
                {/* <label for="hospital">Hospital</label><br/>
                <input type="text" id="hospital" name="hospital" placeholder="Hospital.."/><br/> */}
                <label for="city">City</label><br/>
                <input type="text" id="city" name="city" placeholder="City.."/><br/>
                <label for="state">State</label><br/>
                <input type="text" id="state" name="state" placeholder="State.."/><br/>
                <label for="country">Country</label><br/>
                <input type="text" id="country" name="country" placeholder="Country.."/><br/>
                <label for="pincode">Pincode</label><br/>
                <input type="number" id="pincode" name="pincode" placeholder="Pincode.."/><br/>
                {/* <label for="date">Date</label><br/>
                <input type="date" id="date" name="date" placeholder="Date.."/><br/>
                <label for="time">Time</label><br/>
                <input type="time" id="time" name="time" placeholder="Time.."/><br/>
                <label for="message">Message</label><br/>
                <textarea id="message" name="message" placeholder="Write something.." style={{height:'200px'}}></textarea><br/>*/}
                <br/><input id="sub" type="submit" value="Submit"/>
            </form>
        </div> 
        ]
    )
}