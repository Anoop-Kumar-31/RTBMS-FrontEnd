import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneNumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChangePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
    };
    const handleSendOTP = async () => {
        try {
          // Make an API call to your server to send the OTP
          const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber }),
          });
    
          if (response.ok) {
            setOtpSent(true);
          } else {
            // Handle error cases
            console.error('Failed to send OTP');
          }
        } catch (error) {
          // Handle error cases
          console.error('Failed to send OTP', error);
        }
      };
      const handleSubmitOTP = async (e) => {
        e.preventDefault();
        try {
          // Make an API call to your server to verify the OTP
          const response = await fetch('/api/verify-otp', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber, otp }),
          });
    
          if (response.ok) {
            setOtpVerified(true);
            alert('OTP verified successfully!');
          } else {
            // Handle error cases
            alert('Failed to verify OTP');
          }
        } catch (error) {
          // Handle error cases
          alert('Failed to verify OTP');
        }
      };

      return (
        <div>
          {otpSent ? (
            <form onSubmit={handleSubmitOTP}>
              <label>
                Enter OTP:
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Verify OTP</button>
            </form>
          ) : (
            <div>
              <label>
                Phone Number:
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                  required
                />
              </label>
              <button onClick={handleSendOTP}>Send OTP</button>
            </div>
          )}
        </div>
      );
};

export default PhoneNumberVerification;