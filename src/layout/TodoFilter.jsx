const TodoFilter = ({ filteredActionBtn, handleFilterTodos, className }) => {
  return (
    <div className={`${className} `}>
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
    </div>
  );
};

export default TodoFilter;
