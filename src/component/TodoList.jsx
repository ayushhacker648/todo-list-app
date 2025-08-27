import { Check, Trash2 } from 'lucide-react';

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          {/* Checkbox */}
          <button
            onClick={() => onToggleTodo(todo.id)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              todo.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            {todo.completed && <Check className="w-3 h-3" />}
          </button>

          {/* Todo Text */}
          <span
            className={`flex-1 ${
              todo.completed
                ? 'text-gray-500 line-through'
                : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>

          {/* Delete Button */}
          <button
            onClick={() => onRemoveTodo(todo.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;