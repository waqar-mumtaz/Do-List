import React, { useState } from 'react';

function AddTodo({ todos, addNewTodo }) {
  const [addInput, setAddInput] = useState('');

  const onAddHandle = () => {
    if (addInput !== '') {
      addNewTodo([addInput, ...todos]);
      setAddInput('');
    }
  };
  return (
    <div className="flex ">
      <input
        className="w-[700px] py-3 pl-4 rounded-sm border active:border-blue-500"
        type="text"
        value={addInput}
        placeholder="What do you need to do today?"
        onChange={(e) => setAddInput(e.target.value)}
      />
      <button
        onClick={onAddHandle}
        value="add"
        className="bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
