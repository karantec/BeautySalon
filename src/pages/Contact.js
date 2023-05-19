import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EventBooking() {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
     emailjs.sendForm('service_n0xz6jq', 'template_hl6is0g', form.current, 'lLapA1Gdu62h7SR47')
        .then((result) => {
            console.log(result.text);
           
        }, (error) => {
            console.log(error.text);
        });
    };
    

    

    return (
        <>
            <div className="max-w-screen-xl mx-auto my-12 p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-6">Book Your Event</h1>
                <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name</label>
                 <input className="border border-gray-400 p-2 w-full
                  rounded-md" required type="text" name="user_name" />
                  </div>
                  <div className="mb-4">
                 <label>Email</label>
                 <input className="border border-gray-400 p-2 w-full
                  rounded-md"  required type="email" name="user_email" />
                 </div>
                <div className="mb-4">
                <label>Event Name</label> 

                 <textarea  className="border border-gray-400 p-2 w-full rounded-md"name="message" />
                 </div>
                <input  onClick={()=>alert("Success")} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit" value="Send" />
                   
                </form>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2811099104774!2d86.14943017528877!3d23.66590307872815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4234692532021%3A0x526797e09e88bd48!2sCity%20centre%20sector%204!5e0!3m2!1sen!2sin!4v1684479098847!5m2!1sen!2sin"
    width="600" height="450" style="border:0;" allowfullscreen=""
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
        </>
    );
}
