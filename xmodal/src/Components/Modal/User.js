import React, { useState } from 'react';
import './User.css';

export default function User({ isModalOpen, setIsModalOpen }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');

    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        if (!inputValue.includes('@')) {
            e.target.setCustomValidity(`Please include an '@' in the email address. '${inputValue}' is missing an '@'.`);
        } else {
            e.target.setCustomValidity('');
        }
    };

    const handlePhoneNumberChange = (e) => {
        const inputVal = e.target.value;
        setPhone(inputVal);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.length !== 10) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
        }

        const currentDate = new Date();
        const enteredDate = new Date(dob);

        if (enteredDate > currentDate) {
            alert('Invalid date of birth. Date of birth cannot be in the future.');
            return;
        }

        setIsModalOpen(false);
    };


    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={(e) => {
                setIsModalOpen(false)
            }}>
                <div className="modal-content" onClick={handleModalClick}>
                    <h2>Fill details</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'><strong>Username:</strong></label>
                        <input onChange={handleUsernameChange} id='username' name='username' value={username} required />
                        <label htmlFor='email'><strong>Email Address:</strong></label>
                        <input onChange={handleEmailChange} id='email' name='email' type='email' value={email} required />
                        <label htmlFor='phone'><strong>Phone Number:</strong></label>
                        <input onChange={handlePhoneNumberChange} id='phone' name='phone' value={phone} required />
                        <label htmlFor='dob'><strong>Date of Birth:</strong></label>
                        <input onChange={handleDobChange} id='dob' name='dob' type='date' value={dob} required />
                        <button className='submit-button'>Submit</button>
                    </form>
                </div>
            </div>

        </>
    );
}