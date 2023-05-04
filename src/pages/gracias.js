import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import GetInTouch from '@/components/getInTouch';

const Gracias = () => {

  const [emailSubmitted, setEmailSubmitted] = useState('');
  const router = useRouter();
  const { finalData } = router.query;

  const handleEmailSubmitted = (email) => {
    setEmailSubmitted(email);
  };

  useEffect(() => {
    if (emailSubmitted) {
      const updatedFinalData = `${finalData}, Email: ${emailSubmitted}`;
      // Send updatedFinalData using SendinBlue
      const sendEmail = async () => {
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              toEmail: 'contentwars2023@gmail.com',
              textContent: updatedFinalData,
            }),
          });

          if (response.ok) {
            console.log('Email enviado correctamente');
            setTimeout(() => {
              router.push('/graciasFinal');
            }, 1000);
          } else {
            console.error('Error al enviar el correo electrónico');
          }
        } catch (error) {
          console.error('Error al enviar el correo electrónico:', error);
        }
      };

      sendEmail();
    }
  }, [emailSubmitted, router]);

  return (
    <>
      <Head>
        <title>Thanks</title>
        <meta
          name="landing si"
          content="Encuesta para Money Trip"
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <div className="text-center">
            <div
              className="p-3 px-8 text-2xl text-light/90 font-semibold 
              flex items-center justify-center"
            >
              Thank you for completing our survey!
            </div>

            <div
              className="p-3 px-8 text-lg text-light/90 font-normal mb-4 
              flex items-center justify-center md:!text-base sm:!text-sm-custom"
            >
              Don&apos;t forget to share the link with your colleagues and fellow business owners. Once the survey period is over, you will receive a report with valuable information about these challenges. Leave us your email to send it to you.
            </div>
            <GetInTouch onSubmitEmail={handleEmailSubmitted} />

          </div>
        </div>
      </div>
  
        
    </>
  )
}

export default Gracias;