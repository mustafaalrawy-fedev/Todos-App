import Image from '../components/Image';
import { motion } from 'motion/react';

const Header = ({ themeIcon, toggleTheme }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className='absolute top-12 left-1/2 -translate-x-1/2 flex justify-between w-full container'
    >
      <h1 className='text-4xl font-bold uppercase tracking-main-space text-white-color'>
        Todo
      </h1>
      <button onClick={toggleTheme}>
        <Image src={themeIcon} alt='Theme Toggle Icon' />
      </button>
    </motion.header>
  );
};

export default Header;
