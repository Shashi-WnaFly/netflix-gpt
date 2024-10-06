const GPTSearchBar = () => {
  return (
    <div className="z-20 pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 p-6 grid grid-cols-12 rounded-lg gap-2">
        <input type="text" placeholder="Search Your Movie" className="p-4 col-span-9 rounded-lg bg-slate-100 outline-none text-lg font-semibold" />
        <button className="col-span-3 p-4 bg-red-600 rounded-lg text-white font-semibold text-lg">Search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
