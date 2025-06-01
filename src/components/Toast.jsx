import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Toast = ({ color, message, setToastMsg }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setToastMsg('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, setToastMsg]);

  const toastClasses = `fixed top-5 right-5 px-5 py-2 rounded-md shadow-md h-fit w-fit`;

  const toastColor = {
    success: 'border-2 border-green-500 text-green-500 bg-white',
    error: 'border-2 border-red-500 text-red-500 bg-white',
    info: 'border-2 border-sky-500 text-sky-500 bg-white',
    warning: 'border-2 border-orange-500 text-orange-500 bg-white',
  };

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`${toastClasses} ${toastColor[color]}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
