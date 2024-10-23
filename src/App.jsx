import { useState } from 'react'
import Banner from './AllComponents/Banner/Banner'
import Navber from './AllComponents/Navbar/Navber'
import Cards from './AllComponents/RecipesCard/Cards'
import Recipe from './AllComponents/Recipi/Recipe'
import Sidebar from './AllComponents/Sidebar/Sidebar'
import './App.css'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])

  const handleWantToCookBtn = (recipe)=>{
    const isExist = recipeQueue.find(prevRecipe=> prevRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('It is already existed!!')
    }
    
  }
  return (
    <>
    {/* Navber component here */}
    <Navber></Navber>
    {/* Banner component here */}
    <Banner></Banner>
    {/* Recipe section here */}
    <Recipe></Recipe>
    {/* Recipe card section here */}
    <section className='w-11/12 mx-auto flex flex-col md:flex-row gap-5 justify-between'>
    {/* card */}
    <Cards handleWantToCookBtn={handleWantToCookBtn}></Cards>
    {/* side bar */}
    <Sidebar recipeQueue={recipeQueue}></Sidebar>
    </section>
    </>
  )
}

export default App
