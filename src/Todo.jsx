function Todo() {
  return (
    <section className="bg-white w-[850px] flex justify-center py-8">
      <div>
        <div className="font-bold text-base flex justify-between mb-2">
          <h1>Awesome Todo List</h1>
          <h2 className="cursor-pointer hover:text-blue-400 hover:underline active:text-blue-500">
            Clear all
          </h2>
        </div>
        <div>
          <input
            className="w-[700px] py-3 pl-4 rounded-sm border"
            type="text"
            placeholder="What do you need to do today?"
          />
          <button className="bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800">
            Add
          </button>
        </div>
        <ul>
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Print bills</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Call Rampbo</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Print Statements all</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>it be advisable for me to think about business content?</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>For what reason would it be advisable for me to think.</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>For what reason would it be advisable.</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
        </ul>
      </div>
    </section>
  );
}

export default Todo;
