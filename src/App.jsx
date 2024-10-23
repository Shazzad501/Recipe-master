import Banner from './AllComponents/Banner/Banner'
import Navber from './AllComponents/Navbar/Navber'
import Cards from './AllComponents/RecipesCard/Cards'
import Recipe from './AllComponents/Recipi/Recipe'
import Sidebar from './AllComponents/Sidebar/Sidebar'
import './App.css'

function App() {

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
    <Cards></Cards>
    {/* side bar */}
    <Sidebar></Sidebar>
    </section>
    </>
  )
}

export default App
