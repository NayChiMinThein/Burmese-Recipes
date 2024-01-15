import { Link } from "react-router-dom"
import recipes from "../json/BurmeseRecipes.json"
import defaultImg from "/default.png"

const Items = () => {
  return (
    <div className="my-8 mx-4 md:mx-8 xl:my-12 xl:mx-16">
      <div className="grid gap-4 md:gap-6 xl:gap-8 md:grid-cols-2">
        {recipes.map(recipe => {
          return (
            <Link to={`/details/${recipe.Guid}`} key={recipe.Guid}>
              <div className="flex items-center shadow-md p-4 xl:px-8 xl:py-5 rounded-md">
                <img 
                  src={`/${recipe.Name}.jpg`} alt={recipe.Name}
                  className="me-4 xl:me-5 w-20 md:w-24 md:h-24 md:rounded-full md:object-cover xl:w-32 xl:h-32"
                  onError={e => {e.target.src = defaultImg}} 
                />
                <h3 className="md:text-lg xl:text-xl">{recipe.Name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Items