import hamburger from "./../assets/hamburger.svg"
import userIcon from "./../assets/userIcon.svg"
import searchIcon from "./../assets/searchIcon.svg"


let Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <img src={hamburger} className="h-5 cursor-pointer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg" className="w-20"/>
            </div>
            <div className="flex">
                <input type="text" className="border-black border-2 rounded-l-2xl w-80" />
                <button className="border-black border-2 rounded-r-2xl p-1">
                    <img src={searchIcon} className="w-4"/>
                </button>
            </div>
            <div className="flex items-center">
                <img src={userIcon} className="w-6"/>
            </div>
        </div>
    )
}

export default Header;