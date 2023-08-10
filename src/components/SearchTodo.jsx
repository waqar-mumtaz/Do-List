
import React from "react";
import { todoList } from "../App";

function SearchTodo({todos, setSearchTodos}) {
  const searchTodos = (event) => {
    //  console.log(e.target.value, 'e.target.value');
    const value = event.target.value.toLocaleLowerCase();
    // console.log(value, 'value');

    if (value.length > 1) {
      const filteredTodos = todos.filter((todo) =>
        todo.toLocaleLowerCase().includes(value)
      );
      console.log(filteredTodos, 'filteredTodos');
      setSearchTodos(filteredTodos);
    } else{
      setSearchTodos(todoList)
    }
  };
  return (
    <input
      className="w-full py-3 pl-4 rounded-sm border active:border-blue-500"
      type="text"
      placeholder="search todos"
      // onChange={(e) => searchTodos(e)}
      onChange={searchTodos}
    />
  );
}
export default SearchTodo;
