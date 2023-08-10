function Searchbar() {
  return (
    <div className="flex ">
      <input
        className="w-[700px] py-3 pl-4 rounded-sm border active:border-blue-500"
        type="text"
        placeholder="What do you need to do today?"
      />
      <button className="bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800">
        Add
      </button>
    </div>
  );
}
export default Searchbar;
