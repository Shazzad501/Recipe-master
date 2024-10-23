const Card = ({card, handleWantToCookBtn}) => {
  const {recipe_name, short_description, image_url, ingredients, preparation_time, calories} =card;
  return (
    <div>
      <div className="card bg-base-100 border-2 p-7">
        <figure className="h-64">
          <img
          className="w-full h-full rounded-md"
            src={image_url}
            alt="Shoes" />
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title font-extrabold text-2xl mt-6">{recipe_name}</h2>
          <p className="text-lg font-semibold">{short_description}</p>
          <div>
            <h2 className="font-bold text-xl mb-4">Ingredients:- {ingredients.length}</h2>
            <ul className="flex flex-col gap-2 ml-5">
              {
                ingredients.map((item, idx)=><li key={idx} className="font-semibold text-base list-disc">{item}</li>)}
            </ul>
            <div className="p-3 flex gap-4">
              <p className="flex items-center">
                <span className="font-bold text-xl">
                  <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
                  </span>
                <span className="font-bold text-base">
                  {preparation_time} minute
                </span>
              </p>
              <p className="flex items-center">
                <span className="font-bold text-xl"><i className="fa-solid fa-fire-flame-curved"></i>&nbsp;&nbsp;</span>
                <span className="font-bold text-base">{calories} calories</span>
              </p>
            </div>
          </div>
          <div className="card-actions">
            <button
             className="btn font-bold text-base rounded-xl bg-[#3cd462]"
             onClick={()=>handleWantToCookBtn(card)}>
              Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;