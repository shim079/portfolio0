'use client';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './style.module.css';
import TextPressure from './TextPressure';
import Magnet from './Magnet';
import { FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";



const Page = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); 
  const [validationError, setValidationError] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();

  const fullname = form.current.fullname.value.trim();
  const email = form.current.email.value.trim();
  const message = form.current.message.value.trim();

    // Basic validation
  if (!fullname || !email || !message) {
    setValidationError("Please fill out all fields.");
    setTimeout(() => setValidationError(null), 3000);
    return;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setValidationError("Please enter a valid email address.");
    setTimeout(() => setValidationError(null), 3000);
    return;
  }

    emailjs
      .sendForm('service_3ab4jku', 'template_ien2tej', form.current, {
        publicKey: 'yd1IBHZogNonX_QhN',
      })
      .then(
        () => {
           setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          setStatus("error");
        setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <div className={styles.body}>


      

         {/* Alert Messages */}
      <div className="flex justify-center mt-6">
        {status === "success" && (
          <div className="p-3 rounded-xl bg-green-600 text-white text-center shadow-lg w-[300px]">
            Your message was sent successfully! 🎉
          </div>
        )}

        {status === "error" && (
          <div className="p-3 rounded-xl bg-red-600 text-white text-center shadow-lg w-[300px]">
            Failed to send message. Please try again. ❌
          </div>
        )}

        {validationError && (
  <div className="mb-4 p-3 rounded-xl bg-yellow-600 text-white text-center shadow-lg">
    {validationError}
  </div>
)}
      </div>


      {/* Background Blur Circles */}
      <div className="relative h-full w-fit bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Contact Title */}
      <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[40px] pl-[130px] mb-16">
        <TextPressure
          text="Contact "
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={35}
        />
      </div>


      {/* Contact Form */}
      <div className="flex flex-col lg:flex-row gap-10">
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className="pl-15 pr-8 flex flex-col gap-2">
            <label htmlFor='fullname'>Your Name</label>
            <input
              name="fullname"
              className='w-full h-11 px-4 py-2 rounded-2xl border border-slate-50'
              type='text'
              id='fullname'
              placeholder='Name'
            />
          </div>

          <div className="pl-15 pr-8 flex flex-col gap-2">
            <label htmlFor='email'>Your Email</label>
            <input
              name="email"
              className='w-full h-11 px-4 py-2 rounded-2xl border border-slate-50'
              type='email'
              id='email'
              placeholder='Email'
            />
          </div>

          <div className="pl-15 pr-8 flex flex-col gap-2">
            <label htmlFor='message'>Your Message</label>
            <textarea
              name="message"
              className='px-4 py-2 border border-slate-50 h-48 w-full rounded-2xl shadow-md'
              id='message'
              placeholder='Type Your Message Here'
            />
          </div>

          <Magnet padding={70} disabled={false} magnetStrength={20}>
            <button className='mt-3 p-3 ml-25 text-white font-bold border-1 w-29 h-12 md:w-36 rounded-2xl cursor-pointer' type='submit'>
              Send
            </button>
          </Magnet>
        </form>

        {/* Contact Info */}
        <div className="pr-20 pl-10 flex-1 text-white space-y-6">
          <p>
            I can listen and work with you whether you’re seeking a partner to help develop your brand,
            explore new ideas, or just need someone to bounce ideas off of.
          </p>
          <h2 className='pt-4'>You can find me on:</h2>

          <ul className='p-5 bg-[#FF00B61A] rounded-lg space-y-2'>
            <li><strong>Email:</strong> Sh.s.alsuraihi@gmail.com</li>
            <li><strong>Phone:</strong> 966563772833</li>
          </ul>

          <div className='flex items-center gap-4 p-5 bg-[#FF00B61A] rounded-lg'>
            <span>Social media:</span>
            <a href='https://www.linkedin.com/in/shaima-alharbi-7201b822a/'><FaLinkedinIn size={24} /></a>
            <a href='/'><FaTwitter size={24} /></a>
            <a href='https://www.behance.net/shaimas4'><FaBehance size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;