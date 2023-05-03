import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TypingText } from '@/components/context/othersComponents';

const PreguntaCinco = () => {
  const [inputValue, setInputValue] = useState('');
  const [rubroValue, setRubroValue] = useState(''); 
  const router = useRouter();
  const { area, updatedData } = router.query;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRubroChange = (e) => { // Add this function
    setRubroValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = `${updatedData}, ${inputValue}, Rubro: ${rubroValue}`; // Include rubroValue
    console.log('Final Data:', finalData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toEmail: 'vdavilaamelinckx@gmail.com',
          textContent: finalData,
        }),
      });

      if (response.ok) {
        console.log('Email enviado correctamente');
        setInputValue('');
        setRubroValue('');
        setTimeout(() => {
          router.push({
            pathname: '/gracias',
            query: { finalData },
          });
        }, 1000);
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };
  
  return (
    <>
      <Head>
        <title>Last Question</title>
        <meta
          name="landing si"
          content="Encuesta para Money Trip"
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <TypingText title={`| ${area}`} textStyles="text-center text-xs text-light/40" />
          <div className="text-center">
              <div
                className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
              >
            What are the main reasons you have not implemented the identified solutions? </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[35%] md:w-[35%] sm:w-[40%] flex flex-row justify-center pt-2 text-center space-x-4'>
       
          <div className={`mx-auto flex flex-col gap-6`}>

            <form onSubmit={handleSubmit} className="flex flex-col md:items-center gap-5">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                className="py-4 px-6 bg-light/10 rounded-[32px] text-light flex-grow"
                placeholder="Explain"
                rows={5}
                required
              />
              <textarea
                value={rubroValue} // Update this line
                onChange={handleRubroChange} // Update this line
                className="py-4 px-6 bg-light/10 rounded-[32px] text-light flex-grow"
                placeholder="Business sector"
                rows={1}
                required
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center h-fit py-3 px-4 bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]"
                >
                  <span className="font-bold text-[16px] text-light">Send</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
        
    </>
  )
}

export default PreguntaCinco;


