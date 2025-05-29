import { motion } from 'motion/react';

const TodoForm = ({
  handleAddTodo,
  handleInput,
  inputChecked,
  handleInputChecked,
  inputFocused,
  newTodo,
  todoListBgColor,
  inputActionColor,
  textColor,
}) => {
  return (
    <motion.form
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onSubmit={(e) => handleAddTodo(e)}
      className='absolute top-30 container'
    >
      <div
        className={`flex items-center gap-2 w-full h-14 ${todoListBgColor} px-5 rounded-md`}
      >
        <span className='flex gap-3 items-center shrink-0'>
          <span
            className={`w-5 h-5 md:w-6 md:h-6 border rounded-full relative border-dark-todos-border-color cursor-pointer ${
              inputChecked ? 'bg-gradient-check' : 'bg-transparent'
            }`}
            onClick={handleInputChecked}
          ></span>
          <p className={`text-xs sm:text-sm ${inputActionColor}`}>
            {inputChecked
              ? 'Input Disabled'
              : `${inputFocused ? 'Currently Typing' : 'Create a new todo...'}`}
          </p>
        </span>
        <input
          type='text'
          className={`h-full input grow caret-caret-blue text-sm ${textColor} ${
            inputChecked ? 'disabled cursor-no-drop' : ''
          }`}
          disabled={inputChecked}
          value={newTodo}
          onChange={(e) => handleInput(e)}
        />
      </div>
    </motion.form>
  );
};

export default TodoForm;
