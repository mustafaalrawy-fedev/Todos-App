import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import ProgressBar from '../components/ProgressBar';
import Image from '../components/Image';
import TodoApp from './TodoApp';
import useTheme from '../hooks/useTheme';
import stylesToggle from '../data/styles';
// import { listIcon } from '../data/icons';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const { splashScreenBgColor, textColor } = stylesToggle(theme);

  return (
    <>
      {isLoading ? (
        <motion.div
          className={`h-screen flex flex-col items-center justify-center container  ${splashScreenBgColor}`}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <main>
            <h1
              className={`text-4xl font-bold uppercase tracking-main-space ${textColor}`}
            >
              Todo App
            </h1>
          </main>
          <ProgressBar progress={100} />
        </motion.div>
      ) : !isLoading && !isStarted ? (
        <div
          className={`h-screen flex flex-col items-center justify-center container ${splashScreenBgColor}`}
        >
          {/* <Image src={listIcon} alt='List Icon' className='w-10 h-10 mb-10' /> */}
          <motion.h1
            className={`text-4xl font-bold uppercase tracking-main-space ${textColor} mb-10`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Todo App
          </motion.h1>

          <motion.button
            onClick={() => setIsStarted(true)}
            className={`text-white-color bg-gradient-check px-5 py-3 rounded-md`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Get Started
          </motion.button>
        </div>
      ) : (
        <TodoApp />
      )}
    </>
  );
};

export default SplashScreen;
