const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalCalorie, totalTime}) => {
  return (
    <div className="w-full md:w-1/3 border-2 rounded-xl p-1">
      {/* Want to Cook table */}
      <h2 className="text-center font-extrabold text-2xl mb-4">Want to Cook: <span className="font-extrabold text-2xl">0{recipeQueue.length}</span></h2>
      <hr/>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base">Name</th>
              <th className="font-bold text-base">Time</th>
              <th className="font-bold text-base">Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            recipeQueue.map((recipe ,idx)=> <tr key={idx} className="hover">
            <td className="font-bold text-sm">{recipe.recipe_id}</td>
            <td className="font-bold text-sm">{recipe.recipe_name}</td>
            <td className="font-bold text-sm">{recipe.preparation_time} minute</td>
            <td className="font-bold text-sm">{recipe.calories} calories</td>
            <td className="flex items-center justify-center">
              <button onClick={()=>{
                calculateTimeAndCalories(recipe.preparation_time, recipe.calories)
                handleRemove(recipe.recipe_id)}} className="btn btn-sm bg-[#0BE58A] rounded-full">Preparing</button>
            </td>
          </tr>)
          }
          </tbody>
        </table>
      </div>
          <hr className="mb-9"/>
      {/* Currently cook table */}

      <h2 className="text-center font-extrabold text-2xl mb-4">Currently cooking: <span className="font-extrabold text-2xl">0{preparedRecipe.length}</span></h2>
      <hr/>

      {/* Want to Cook table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base">Name</th>
              <th className="font-bold text-base">Time</th>
              <th className="font-bold text-base">Calories</th>
            </tr>
          </thead>
          <tbody>
          {
            preparedRecipe.map((recipe ,idx)=> <tr key={idx} className="hover">
            <td className="font-bold text-sm">{recipe.recipe_id}</td>
            <td className="font-bold text-sm">{recipe.recipe_name}</td>
            <td className="font-bold text-sm">{recipe.preparation_time} minute</td>
            <td className="font-bold text-sm">{recipe.calories} calories</td>
          </tr>)
          }
          <tr className="border-none">
            <th></th>
            <td></td>
            <td className="font-bold text-sm">Total Time: {totalTime}</td>
            <td className="font-bold text-sm">Total Calorie: {totalCalorie}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;