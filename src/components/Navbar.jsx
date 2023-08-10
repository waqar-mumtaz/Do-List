function Navbar() {
  return (
      <div className="font-bold text-base flex w-full justify-between mb-2">
        <h1>Awesome Todo List</h1>
        <h2 className="cursor-pointer hover:text-blue-400 hover:underline active:text-blue-500">
          Clear all
        </h2>
      </div>
  );
}

export default Navbar;
