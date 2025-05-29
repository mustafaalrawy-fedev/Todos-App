import { motion } from 'motion/react';

const TodoFilter = ({
  filteredActionBtn,
  handleFilterTodos,
  className,
  initial,
  animate,
  transition,
  // whileInView,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      // whileInView={whileInView}
      transition={transition}
      className={`${className} `}
    >
      <li className={`${filteredActionBtn('All')}`}>
        <button onClick={() => handleFilterTodos('All')}>All</button>
      </li>
      <li className={`${filteredActionBtn('Active')}`}>
        <button onClick={() => handleFilterTodos('Active')}>Active</button>
      </li>
      <li className={`${filteredActionBtn('Completed')}`}>
        <button onClick={() => handleFilterTodos('Completed')}>
          Completed
        </button>
      </li>
    </motion.div>
  );
};

export default TodoFilter;
