import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchTodo from './components/SearchTodo';
import Todo from './components/Todo';

export const todoList = [
  'Go to the store',
  'Wash the dishes',
  'Learn some code',
  'Buy some food',
  'Feed the cat',
];

function App() {
  const [todos, setTodos] = useState(todoList);

  return (
    <div className="bg-slate-100 pt-6">
      <div className="App w-[850px] h-screen mx-auto p-10 bg-white ">
        <Navbar />
        <div className="flex ">
          <SearchTodo
            todos={todos}
            //setSearchTodos={setTodos}
            // setSearchTodos={(value) => setTodos(value)}
            setSearchTodos={function (value) {
              setTodos(value);
            }}
          />
        </div>
        {todos.length > 0 ? (
          todos.map((item, index) => <Todo todo={item} key={index} />)
        ) : (
          <p className="text-center text-2xl text-gray-400 pt-8">
            No todos found
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
