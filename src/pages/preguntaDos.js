import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import { TypingText } from '@/components/context/othersComponents';

const PreguntaDos = () => {
  const router = useRouter();
  const selectedArea = router.query.data;
  const areaText = router.query.areaText;

  const options = {
    sales: [
      'Generating potential customer traffic',
      'Converting potential customers into actual sales',
      'Retention of existing customers',
      'Long-term customer loyalty',
      'Other aspects related to sales and marketing',
    ],
    finance: [
      'Control and reduction of operational costs',
      'Improvement in cash flow management and accounts payable',
      'Timely financial and performance reporting',
      'Establishment of clear financial budgets and goals',
      'Other aspects related to financial and administrative management',
    ],
    production: [
      'Optimization of production processes and supply chain',
      'Quality control of products and services offered',
      'Reduction of delivery and/or production times',
      'Inventory management and control of production costs',
      'Other aspects related to production and operations',
    ],
    human: [
      'Selection and retention of appropriate personnel',
      'Development of skills and competencies in existing personnel',
      'Improvement in the management of the work environment and employee motivation',
      'Implementation of training and development policies and programs for personnel',
      'Other aspects related to talent and human resources management',
    ],
    data: [
      'Integration of computer systems and data analysis',
      'Information security and prevention of IT risks',
      'Access and availability of information in a timely manner',
      'Improvement in data quality and management',
      'Other aspects related to data and IT management',
    ],
  };

  const renderOptions = () => (
    <>
      {options[selectedArea]?.map((option, index) => (
        <Link
          href={{
            pathname: '/preguntaTres',
            query: { area: areaText, data: option },
          }}
          passHref
          key={option}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-center h-fit py-3 px-4 text-lg md:!text-sm sm:!text-sm-custom text-light bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]">
              {option}
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );

  return (
    <>
      <Head>
        <title>Question</title>
        <meta name="landing si" content="Encuesta para Money Trip" />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <TypingText title={`| ${areaText}`} textStyles="text-center text-xs text-light/40" />
          <div className="text-center">
            <div className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 flex items-center justify-center">
              Within the {areaText}, the MAIN obstacle is:{' '}
            </div>
          </div>
        </div>

        <div className="w-[40%] lg:w-[50%] md:w-[60%] sm:w-[80%] flex flex-row justify-center text-center pt-2 space-x-4">
          <div className={`mx-auto flex flex-col space-y-2`}>{renderOptions()}</div>
        </div>
      </div>
    </>
  );
};

export default PreguntaDos;
