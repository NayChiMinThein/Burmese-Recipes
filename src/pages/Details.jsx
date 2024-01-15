import { Link, useParams } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5";
import recipes from "../json/BurmeseRecipes.json"
import userTypes from "../json/UserTypes.json"
import defaultImg from "/default.png"
import { useEffect } from "react";

const Details = () => {
  const { recipeId } = useParams()

  const recipe = recipes.find(recipe => recipe.Guid === recipeId)
  const type = userTypes.find(userType => userType.UserCode === recipe.UserType)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="my-4 md:my-16 md:mx-12 lg:mx-16 xl:mx-28 xl:my-20">
      <Link to="/">
        <button className="text-3xl mx-3 md:hidden">
          <IoArrowBackCircle/>
        </button>
      </Link>
      <div className="mt-3 md:flex">
        <img src={`/${recipe.Name}.jpg`} alt={recipe.Name} 
          className="mx-auto border-4 border-slate-300 rounded-md p-3 w-56 md:w-64 lg:w-72 xl:w-96 md:h-fit"
          onError={e => {e.target.src = defaultImg}} 
        />
        <div className="mx-7 mt-5 mb-6 md:mt-2">
          <Link to="/">
            <button className="hidden md:block bg-amber-400 px-3 xl:px-5 py-1 text-sm xl:text-base rounded-lg
              float-right xl:me-6">
              Back
            </button>
          </Link>
          <div className="xl:mt-1">
            <h2 className="text-2xl xl:text-3xl">For</h2>
            <p className="xl:text-lg mb-4">{type.UserMMType} Or {type.UserEngType}</p>
          </div>
          <hr />
          <div className="my-4 xl:my-4">
            <h2 className="text-2xl xl:text-3xl">Menu Name</h2>
            <p className="xl:text-lg mt-1">{recipe.Name}</p>
          </div>
          <hr />
          <div className="my-4 xl:mb-4">
            <h2 className="text-2xl xl:text-3xl">Ingredients</h2>
            <p className="xl:text-lg mt-1 leading-7 xl:leading-8">{recipe.Ingredients}</p>
          </div>
          <hr />
          <div className="mt-4">
            <h2 className="text-2xl xl:text-3xl">How to cook ?</h2>
            <p className="xl:text-lg mt-1 leading-7 xl:leading-8">{recipe.CookingInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details