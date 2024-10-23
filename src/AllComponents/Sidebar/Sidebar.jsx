const Sidebar = ({recipeQueue}) => {
  return (
    <div className="w-full md:w-1/3 border-2 rounded-xl p-5">
      <h2>hello sidebar:-{recipeQueue.length}</h2>
    </div>
  );
};

export default Sidebar;