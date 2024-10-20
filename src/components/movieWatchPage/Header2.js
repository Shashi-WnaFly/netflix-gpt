import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { GPTSearchPage } from "../../utils/GPTSearch";

const Header2 = () => {
    const usr = useSelector((store) => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBrowseClick = () => {
        navigate("/browse");
    }
    const handleGPTClick = () => {
        dispatch(GPTSearchPage())
    }
    return (
        <div className="flex justify-between items-center">
            <div className=" pl-8 flex gap-20">
                <div className="w-36"><img src={LOGO} alt="logo" /></div>
                <button onClick={handleBrowseClick} className="font-semibold hover:text-red-600 cursor-pointer">Browse</button>
                <button onClick={handleGPTClick} className="font-semibold hover:text-red-600 cursor-pointer">GPT Search</button>
            </div>
            <div>
                <div className="mr-10"><img src={usr?.photoURL} alt="userPhoto" /></div>
            </div>
        </div>
    )
}

export default Header2;