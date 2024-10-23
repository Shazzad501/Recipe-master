import { useState } from 'react'
import Banner from './AllComponents/Banner/Banner'
import Navber from './AllComponents/Navbar/Navber'
import Cards from './AllComponents/RecipesCard/Cards'
import Recipe from './AllComponents/Recipi/Recipe'
import Sidebar from './AllComponents/Sidebar/Sidebar'
import './App.css'
import Footer from './AllComponents/Footer/Footer'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalorie, setTotalCalorie] = useState(0)


  // time and calories calculator function
  const calculateTimeAndCalories = (time, calories)=>{
    setTotalTime(totalTime + time);
    setTotalCalorie(totalCalorie + calories);
  }

  // handleWant to cook btn funtionality
  const handleWantToCookBtn = (recipe)=>{
    const isExist = recipeQueue.find(prevRecipe=> prevRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('It is already existed!!')
    }
    
  }

  // handleremove / preparing btn functionality
  const handleRemove = (id)=>{
    // find which recipe remove
    const removeRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

    // remove from want to cook table

    const updateRecipe = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updateRecipe);

    setPreparedRecipe([...preparedRecipe, removeRecipe])
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
    <Sidebar 
    recipeQueue={recipeQueue} 
    handleRemove={handleRemove} 
    preparedRecipe={preparedRecipe} 
    calculateTimeAndCalories={calculateTimeAndCalories}
    totalTime={totalTime}
    totalCalorie={totalCalorie}>

    </Sidebar>
    </section>
    {/* footer section here */}
    <Footer></Footer>
    </>
  )
}

export default App
