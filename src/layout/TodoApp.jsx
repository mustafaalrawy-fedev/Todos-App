import Image from '../components/Image';
import useTheme from '../hooks/useTheme';
import useTodoActions from '../data/todoActions';
import stylesToggle from '../data/styles';
import Header from '../layout/header';
import TodoList from '../layout/TodoList';
import TodoStatus from '../layout/TodoStatus';
import TodoFilter from '../layout/TodoFilter';
import TodoForm from '../layout/TodoForm';
import Toast from '../components/Toast';

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
            filteredActionBtn={filteredActionBtn}
            handleFilterTodos={handleFilterTodos}
            className={`sm:hidden flex gap-5 items-center justify-center ${todoListBgColor}  mt-4 px-5 py-3 rounded-md shadow-xl text-xs sm:text-sm`}
          />
          <main
            className={`flex justify-center items-center text-center mt-5 px-5 h-20 text-xs sm:text-sm ${dragAndDropColor} font-bold`}
          >
            <p>Drag and drop to reorder list</p>
          </main>
        </aside>
      </div>
      <Toast color={toastStatus} message={toastMsg} setToastMsg={setToastMsg} />
    </div>
  );
};

export default TodoApp;
