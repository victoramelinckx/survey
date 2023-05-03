import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import GetInTouch from '@/components/getInTouch';

const GraciasFinal = () => {

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
        <div className="pt-vh-30">
          <div className="text-center">
            <div
              className="p-3 px-8 text-4xl text-light/90 font-semibold 
              flex items-center justify-center"
            >
              Thank you!
            </div>
        </div>
      </div>
      </div>
        
    </>
  )
}

export default GraciasFinal;