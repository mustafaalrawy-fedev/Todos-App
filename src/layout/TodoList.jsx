import { memo } from 'react';
import Image from '../components/Image';
import { checkIcon, crossIcon } from '../data/icons';
import { motion } from 'framer-motion';

const TodoList = ({
  handleCheckBtn,
  handleDeleteTodo,
  visibleTodos,
  borderTodosColor,
  textColor,
  textCompletedTodo,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul variants={container} initial='hidden' animate='show'>
      {visibleTodos.length === 0 ? (
        <motion.p
          variants={item}
          className={`border-b-1 ${borderTodosColor} flex justify-center items-center h-14 text-xs sm:text-sm text-center text-caret-blue font-bold`}
        >
          No todos found
        </motion.p>
      ) : (
        visibleTodos.map((todo) => {
          const { id, title, completed } = todo;
          return (
            <motion.li
              variants={item}
              key={id}
              className={`border-b-1 ${borderTodosColor} px-5 h-14 flex justify-between items-center`}
            >
              {/* Check Button */}
              <div className='w-full flex items-center gap-3'>
                <button
                  className={`w-5 h-5 md:w-6 md:h-6 border rounded-full border-dark-todos-border-color shrink-0 ${
                    completed ? 'bg-gradient-check' : 'bg-transparent'
                  } relative`}
                  onClick={() => handleCheckBtn(id)}
                >
                  <Image
                    src={checkIcon}
                    alt='Check Icon'
                    className={`${
                      completed ? 'scale-100' : 'scale-0'
                    } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  />
                </button>
                <main className='flex items-start w-full text-xs sm:text-sm md:text-sm'>
                  <p
                    className={`${
                      completed
                        ? `line-through ${textCompletedTodo}`
                        : `${textColor}`
                    }`}
                  >
                    {title}
                  </p>
                </main>
              </div>
              {/* Delete Button */}
              <button onClick={() => handleDeleteTodo(id)}>
                <Image
                  src={crossIcon}
                  alt='Cross Icon'
                  // className='w-4 h-4'
                />
              </button>
            </motion.li>
          );
        })
      )}
    </motion.ul>
  );
};

export default memo(TodoList);
