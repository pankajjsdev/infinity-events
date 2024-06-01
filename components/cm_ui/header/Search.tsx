import { Input } from "@/components/ui/input"
import {FaSearch, FaFilter} from "react-icons/fa"
import { VscSettings } from "react-icons/vsc";

function Search({mode}:{mode:string}) {
    const isMobile = mode == "mobile"
  return (
  <div className="bg-white px-5 all-center rounded-full">
    <FaSearch size={20} className="text-black"/>
    <Input className="px-2" placeholder="Search all"/>
    <VscSettings size={30} className="bg-accent-orange text-white rounded"/>
  </div>
  )
}

export default Search