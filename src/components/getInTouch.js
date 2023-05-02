import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import styles from '../components/context/styless';
import { footerVariants } from '../../utils/motion';

const GetInTouch = ({ onSubmitEmail }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.status === 200) {
      setNotification('Email received.');
      onSubmitEmail(email); // Call the onSubmitEmail function
    } else {
      setNotification('Invalid email or something went wrong.');
    }

    setEmail('');
  }

  return (
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} relative max-w-7xl mx-auto`}
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          {notification && (
            <div className="text-center text-green-500">
              {notification}
            </div>
          )}
          <form className="flex flex-row md:items-center md:justify-center gap-5 flex-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-6 bg-light/10 rounded-[32px] text-light flex-grow"
              placeholder="Email"
              required
            />
    
            <div className="flex max-w-sm md:w-auto mt-5 md:mt-0">
              <button type="button" onClick={handleSubmit} className="flex items-center w-full h-fit py-4 px-4 bg-light/10 border border-solidborder-light hover:scale-105 rounded-[32px] gap-[12px]">
                <span className="font-bold text-[16px] text-light">
                  Enviar
                </span>
              </button>
            </div>
    
          </form>
          <div className="mb-[50px] h-[2px] bg-dark opacity-10" />
        </div>
      </motion.div>
    </div>
    
  );
  
};

export default GetInTouch;
