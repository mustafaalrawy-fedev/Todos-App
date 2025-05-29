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

  const toastClasses = `fixed top-5 right-5 p-4 rounded-md shadow-md text-white h-fit w-fit`;

  const toastColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
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
