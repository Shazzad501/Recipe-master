const Card = ({card}) => {
  const {recipe_name, short_description, image_url, ingredients, preparation_time, calories} =card;
  return (
    <div>
      <div class="card bg-base-200 p-7">
        <figure class="h-64">
          <img
          className="w-full h-full rounded-md"
            src={image_url}
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body p-0">
          <h2 class="card-title font-extrabold text-2xl mt-6">{recipe_name}</h2>
          <p className="text-lg font-semibold">{short_description}</p>
          <div>
            <h2 className="font-bold text-xl mb-5">Ingredients:{ingredients.length}</h2>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-base">{ingredients[0]}</li>
              <li className="font-semibold text-base">{ingredients[1]}</li>
              <li className="font-semibold text-base">{ingredients[2]}</li>
              <li className="font-semibold text-base">{ingredients[3]}</li>
            </ul>
          </div>
          <div class="card-actions">
            <button class="btn rounded-xl bg-[#3cd462] mt-3">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;