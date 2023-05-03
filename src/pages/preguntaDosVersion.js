import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TypingText } from '@/components/context/othersComponents';

const PreguntaDosVersion = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const { areaText } = router.query;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = `${areaText}: ${inputValue}`;
    console.log('Combined Data:', combinedData);

    router.push({
      pathname: '/preguntaCuatro',
      query: { combinedData },
    });
  };


  return (
    <>
      <Head>
        <title>Question</title>
        <meta name="landing si" content="Encuesta para Money Trip" />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <div className="text-center">
            <div
              className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
            >
              How is this problem affecting the success and growth of your business?
            </div>
          </div>
        </div>

        <div className="w-[20%] lg:w-[35%] md:w-[35%] sm:w-[40%] flex flex-row justify-center pt-2 text-center space-x-4">
          <div className={`mx-auto flex flex-col gap-6`}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:items-center gap-5"
            >
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                className="py-4 px-6 bg-light/10 rounded-[32px] text-light flex-grow"
                placeholder="Explain"
                rows={5}
                required
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center h-fit py-3 px-4 bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]"
                >
                  <span className="font-bold text-[16px] text-light">
                    Next
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreguntaDosVersion;
