import { Link } from "react-router-dom"
import { BiFoodMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-amber-400 p-4 md:px-8 md:py-5 xl:px-12 xl:py-6 text-xl md:text-2xl xl:text-3xl flex items-center
      sticky top-0 left-0 font-medium md:font-normal">
      <BiFoodMenu/>
      <Link to="/">Burmese Recipes</Link>
    </nav>
  )
}

export default Navbar