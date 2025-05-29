import Image from '../components/Image';
import useTheme from '../hooks/useTheme';
import useTodoActions from '../data/todoActions';
import stylesToggle from '../data/styles';
import Header from '../layout/Header';
import TodoList from '../layout/TodoList';
import TodoStatus from '../layout/TodoStatus';
import TodoFilter from '../layout/TodoFilter';
import TodoForm from '../layout/TodoForm';
import Toast from '../components/Toast';
import DragAndDrop from './DragAndDrop';

const TodoApp = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    inputFocused,
    inputChecked,
    newTodo,
    handleInputChecked,
    handleCheckBtn,
    handleInput,
    handleAddTodo,
    handleDeleteTodo,
    handleClearCompletedTodos,
    handleFilterTodos,
    visibleTodos,
    itemLeft,
    filteredActionBtn,
    toastMsg,
    setToastMsg,
    toastStatus,
  } = useTodoActions();
  const {
    heroImage,
    mobileHeroImage,
    themeIcon,
    todoListBgColor,
    borderTodosColor,
    dragAndDropColor,
    inputActionColor,
    textColor,
    textCompletedTodo,
  } = stylesToggle(theme);

  return (
    <div>
      <div className='relative'>
        {/* Hero Images */}
        <Image
          src={heroImage}
          alt='Hero Image'
          className='hidden md:block w-full'
        />
        <Image
          src={mobileHeroImage}
          alt='Hero Image'
          className='w-full md:hidden'
        />

        {/* Header */}
        <Header themeIcon={themeIcon} toggleTheme={toggleTheme} />

        {/* Todo Form */}
        <TodoForm
          handleAddTodo={handleAddTodo}
          handleInput={handleInput}
          inputChecked={inputChecked}
          handleInputChecked={handleInputChecked}
          inputFocused={inputFocused}
          newTodo={newTodo}
          todoListBgColor={todoListBgColor}
          inputActionColor={inputActionColor}
          textColor={textColor}
        />

        {/* Todos */}
        <aside className='container absolute top-48'>
          <article className={`rounded-md ${todoListBgColor} shadow-xl`}>
            {/* Todo List */}
            <TodoList
              handleCheckBtn={handleCheckBtn}
              handleDeleteTodo={handleDeleteTodo}
              visibleTodos={visibleTodos}
              borderTodosColor={borderTodosColor}
              textColor={textColor}
              textCompletedTodo={textCompletedTodo}
            />
            <ul className='flex justify-between items-center px-5 h-14 text-xs sm:text-sm'>
              {/* Todo Status */}
              <TodoStatus itemLeft={itemLeft} />
              {/* Items Filter */}
              <TodoFilter
                filteredActionBtn={filteredActionBtn}
                handleFilterTodos={handleFilterTodos}
                className={'hidden sm:flex gap-5 text-xs sm:text-sm'}
              />
              {/* Clear Completed */}
              <button onClick={handleClearCompletedTodos}>
                Clear Completed
              </button>
            </ul>
          </article>
          {/* Items Filter */}
          <TodoFilter
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            filteredActionBtn={filteredActionBtn}
            handleFilterTodos={handleFilterTodos}
            className={`sm:hidden flex gap-5 items-center justify-center ${todoListBgColor}  mt-4 px-5 py-3 rounded-md shadow-xl text-xs sm:text-sm`}
          />
          {/* Drag And Drop */}
          <DragAndDrop dragAndDropColor={dragAndDropColor} />
        </aside>
      </div>
      <Toast color={toastStatus} message={toastMsg} setToastMsg={setToastMsg} />
    </div>
  );
};

export default TodoApp;
