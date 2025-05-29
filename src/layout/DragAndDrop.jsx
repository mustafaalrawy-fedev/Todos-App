import { motion } from 'motion/react';

const DragAndDrop = ({ dragAndDropColor }) => {
  return (
    <motion.main
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`flex justify-center items-center text-center mt-5 px-5 h-20 text-xs sm:text-sm ${dragAndDropColor} font-bold`}
    >
      <p>Drag and drop to reorder list</p>
    </motion.main>
  );
};

export default DragAndDrop;
