import { CheckSquare } from "lucide-react";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });


  const [inputValue, setInputValue] = useState('');


   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();     //-----breaks refresh page when we enter
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
 };

    const toggleTodo = (id) => {
      setTodos(todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };


  return (
    <div className="container mx-auto px-4 py-8 max-w-md ">
      <div className="bg-white mt-6 rounded-lg min-h-[550px] p-5 space-y-4">

        <div className="text-center pt-8">
          <div className="flex justify-center items-center gap-2">
            <CheckSquare className="w-8 h-8 text-rose-600" />
            <h1 className="text-3xl font-semibold text-gray-800">TODOS APP</h1>
          </div>
        </div>

        <form onSubmit={addTodo} className="flex gap-2 ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-rose-500"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-rose-600 px-6 py-3 text-white rounded-lg hover:bg-rose-700 cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            Add
          </button>
        </form>

        <TodoList todos={todos} 
        onToggleTodo={toggleTodo} 
        onRemoveTodo={removeTodo}/>
      </div>
    </div>
  );
};

export default TodoApp;
