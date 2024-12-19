import React from 'react';
import picture from '../images/PicFront.jpg'
import SuperHero from './images/SuperHero.png'
import bloodDonor from './images/bloodDonor.png'
import '../App.css'
function LandingPage() {
  return (
    [
      <div className='mainBody'>
        <div className='left'>
          <h1 className='heading'>Be the reason for someone’s heartbeat</h1>
          <div style={{ width: '65%', margin: '0 0 5vh 0' }}><p>We provide a platform for individuals in society who want to be part of the noble cause of blood donation, both those who wish to contribute and those who are in need.</p></div>
          <div style={{ padding: '0 0 0 2vw', display: 'flex', alignContent: 'auto' }}>
            <a href="/Form"><button className='butt' style={{ padding: '1.5vh 2vw', marginTop: '2vh' }}>Register as Donor</button></a>
            <a href="/ApplyForBlood"><button className='butt' style={{ padding: '1.5vh 2vw', marginTop: '2vh' }}> Apply for Blood</button></a>
          </div>
        </div>
        <div className='right'>
          <img src={picture} alt="" className='img' style={{ height: "30vw", borderRadius: "48%", zIndex: '-1', }} />
          <div className='smallBox'>
            <h3 style={{ margin: '1vh 5px' }}>Services we provide are </h3>
            <ul>
              <li >Fast and efficient.</li>
              <li>Safe and secure.</li>
              <li>Easy to use.</li>
            </ul>
          </div>
        </div>
      </div>,
      <div className='mainBody'>
        <h1 className='heading' style={{ paddingRight: '2vw' }}>Help Us To Save Lifes</h1>
        <div className='donation'>
          <div className='area1'>
            <h1 style={{ textShadow: '#CDB0B2 1px 1px 1px' }}>Be Someones HERO</h1><hr/>
            <p style={{ lineHeight: '3.5vh' }}>Becoming a blood donor means becoming someone's hero. Every year, millions of people around the world are in need of blood transfusions due to illness, surgery, or accidents. Blood donations save lives and ensure that patients receive the critical care they need. <br />
              By registering as a blood donor on our blood management website, you have the power to make a difference and become a hero to someone in need. The process of donating blood is simple, safe, and takes only a short amount of time. Your donation could help save the life of a child battling cancer, a mother undergoing a difficult childbirth, or a loved one who has been in a serious accident. By donating blood, you are giving the gift of life to someone who desperately needs it.<br />
              So, be someone's hero today and join our blood management website as a donor. Together, we can make a difference in the lives of those who need it most.</p>
          </div>
          <div className={`area2`}><img src={SuperHero} className='heroClass' id='hero' alt="superHero" /></div>
          {/*transform:'translate(0%,-14%)'*/}
          <div className='area3'><img src={bloodDonor} alt="bloodDonor" style={{ width: '100%', paddingLeft: '1vw' }} /></div>
          <div className='area4' style={{ textShadow: 'rgb(255,255,255) 0 0 3px' }}>
            <h1 style={{ textShadow: '#CDB0B2 1px 1px 1px'}}>Help they need, you are indeed!</h1><hr/>
            <p style={{ lineHeight: '3.5vh' }}>Blood donation is a selfless act of kindness that can have a significant impact on someone's life. Many people in our communities need blood transfusions due to various medical conditions, injuries, and accidents. Unfortunately, the supply of blood is often scarce, making it challenging to meet the demand.<br />By donating blood, you can help bridge this gap and provide the help that these individuals desperately need. Your donation can make a lifesaving difference to someone in need, whether it's a young child undergoing cancer treatment, a patient with a chronic illness, or someone who has been in a severe accident. Your contribution can mean the difference between life and death, and you can be the hero that makes it all possible.<br />So, if you are looking for a way to help those in need, donating blood is an excellent place to start. You can make a positive impact on someone's life and be the reason for their smile. Help they need, you are indeed.</p> </div>
        </div>
      </div>,
      <div><br />
        <h1 className='heading' style={{ fontSize: '8vh' }}>Blood Groups</h1>
        <div className="bloodTbl" style={{ display: 'flex' }}>
          <div className='table' style={{ width: '55%', marginTop: '1vh' }}>
            <table>
              <thead>
                <tr>
                  <th>Blood Group</th>
                  <th>Can Donate To</th>
                  <th>Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A+</td>
                  <td>A+, AB+</td>
                  <td>A+, A-, O+, O-</td>
                </tr>
                <tr>
                  <td>A-</td>
                  <td>A+, A-, AB+, AB-</td>
                  <td>A-, O-</td>
                </tr>
                <tr>
                  <td>B+</td>
                  <td>B+, AB+</td>
                  <td>B+, B-, O+, O-</td>
                </tr>
                <tr>
                  <td>B-</td>
                  <td>B+, B-, AB+, AB-</td>
                  <td>B-, O-</td>
                </tr>
                <tr>
                  <td>AB+</td>
                  <td>AB+</td>
                  <td>Everyone (Universal Recipient)</td>
                </tr>
                <tr>
                  <td>AB-</td>
                  <td>AB+, AB-</td>
                  <td>A-, B-, AB-, O-</td>
                </tr>
                <tr>
                  <td>O+</td>
                  <td>O+, A+, B+, AB+</td>
                  <td>O+, O-</td>
                </tr>
                <tr>
                  <td>O-</td>
                  <td>Everyone (Universal Donor)</td>
                  <td>O-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='tableContent' style={{ width: '40%', transform: 'translateY(-6%)', marginLeft: '3vw' }}>
            <p style={{ lineHeight: '3.5vh',textShadow: 'rgb(255,255,255) 0 0 2.5px'}}>
              Donating blood is a simple yet powerful act that can save lives. To ensure the safety and effectiveness of donated blood, certain criteria must be met. Donors should:<br />
              <ul className="criteria">
                <li style={{ marginLeft: '2vw' }}>Be in good health.</li>
                <li style={{ marginLeft: '2vw' }}>Be at least 18 years old (or meet the legal age requirement in their country).</li>
                <li style={{ marginLeft: '2vw' }}>Weigh above a specific minimum weight.</li>
                <li style={{ marginLeft: '2vw' }}>Undergo screening for medical conditions, travel history, and lifestyle factors.</li>
              </ul>
              The table above provides valuable information on blood compatibility for donation and transfusion, indicating which blood types can donate to and receive from others. It's important to consult healthcare professionals and blood donation centers for specific eligibility requirements and guidelines in your region.<br />
              By meeting these criteria and becoming a blood donor, you can make a significant impact on the lives of those in need. Your generous contribution can help patients undergoing surgeries, medical treatments, or facing emergency situations. Join the noble cause of blood donation and be a part of the lifesaving effort today.
            </p>
          </div>
        </div>
      </div>
    ]
  )
}
export default LandingPage;