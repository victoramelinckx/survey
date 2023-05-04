import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';


export default function LandingTwo() {
  return (
    <>
      <Head>
        <title>Survey</title>
        <meta
          name="landing"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">

          <div className="text-center pl-[30%] pr-[30%] md:pl-[5%] md:pr-[5%] ">
            
            <div
              className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
              flex items-center justify-center"
            >
              Discover the main obstacle to success and growth in your business
            </div>

              <div
                className="p-3 px-8 text-lg text-light/90 font-normal mb-4 
               flex items-center justify-center md:!text-base sm:!text-sm-custom"
              >
                Are you a business owner or a senior executive? We would love to hear your thoughts! This brief survey will help you reflect on the main challenges your business is facing. Additionally, given the time you will receive an exclusive report with insights these obstacles. It takes less than 2 minutes!
              </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[30%] md:w-[20%] sm:w-[20%] flex flex-row justify-center pt-2 space-x-4'>
        <Link href="/preguntaUno" passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div
              className="flex items-center h-fit py-3 px-4 text-lg md:!text-base sm:!text-sm text-light bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]"
            >
              Next
            </div>
          </motion.div>
        </Link>
        
        </div>

      </div>
        
    </>
  );
}