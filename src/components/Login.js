import { BG_URL } from "../utils/constants.js";
import Header from "./Header.js";
const Login = () => {
    return (
        <div className=" relative">
            <div className="h-full w-full">
                <Header />
                <img src={BG_URL} alt="bg-image" className=" brightness-50"/>
                
            </div>
        </div>
    )
}

export default Login;