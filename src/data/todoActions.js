import { useState, useEffect, useCallback, useMemo } from 'react';
import todosData from '../data/todosData';
import Toast from '../components/Toast';

const useTodoActions = () => {
  // Initialize state with localStorage or default values
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [...todosData];
  });
  const [inputChecked, setInputChecked] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [filteredTodos, setFilteredTodos] = useState('All');
  const [toast, setToast] = useState({ message: '', status: '' });

  // Persist todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Toast helper function
  const showToast = useCallback((message, status) => {
    setToast({ message, status });
  }, []);

  // Memoized handlers
  const handleCheckBtn = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      showToast('Todo Status Changed', 'info');
    },
    [showToast]
  );

  // Handle Checked Input to toggle from disabled to enabled
  const handleInputChecked = () => {
    setInputChecked(!inputChecked);
    if (inputChecked) {
      showToast('Input Enabled', 'info');
    } else {
      showToast('Input Disabled', 'warning');
    }
  };

  // Handle Form Input
  const handleInput = useCallback((e) => {
    const value = e.target.value;
    setNewTodo(value);
    setInputFocused(!!value);
  }, []);

  // Add Todo
  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!newTodo.trim()) {
        showToast('Please enter a todo, try again!', 'error');
        return;
      }
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(), // More reliable than length+1
          title: newTodo.trim(),
          completed: false,
        },
      ]);
      showToast('Todo added', 'success');
      setNewTodo('');
    },
    [newTodo, showToast]
  );

  // Delete Todo
  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      showToast('Todo Deleted', 'error');
    },
    [showToast]
  );

  // Clear All Completed Todos
  const handleClearCompletedTodos = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
    showToast('Completed Todos Deleted Permanently!', 'warning');
  }, [showToast]);

  const handleFilterTodos = useCallback((filter) => {
    setFilteredTodos(filter);
  }, []);

  // Memoized computed values
  // Visible Todos To filter between Active, Completed, and All
  const visibleTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filteredTodos === 'Active') return !todo.completed;
      if (filteredTodos === 'Completed') return todo.completed;
      return true;
    });
  }, [todos, filteredTodos]);

  // Number of items left That Not Completed yet
  const itemLeft = useMemo(() => {
    return todos.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0);
  }, [todos]);

  const filteredActionBtn = useCallback(
    (filter) => {
      return filteredTodos === filter ? 'text-caret-blue font-bold' : '';
    },
    [filteredTodos]
  );

  return {
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
    toastMsg: toast.message,
    setToastMsg: (msg) => setToast((prev) => ({ ...prev, message: msg })),
    toastStatus: toast.status,
    setToastStatus: (status) => setToast((prev) => ({ ...prev, status })),
  };
};

export default useTodoActions;
