import { motion, AnimatePresence } from 'motion/react';

const ProgressBar = ({ progress }) => {
  return (
    <div className='w-72 h-2 bg-gray-200 rounded-full overflow-hidden'>
      <AnimatePresence>
        <motion.div
          className='h-full bg-gradient-check'
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 3,
            ease: [0.4, 0, 0.2, 1],
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ProgressBar;
