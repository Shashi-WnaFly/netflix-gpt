import { BG_URL } from "../utils/constants.js";
import Header from "./Header.js";
const Login = () => {
    return (
        <div className="">
            <div className="h-screen w-full relative">
                <Header />
                <img src={BG_URL} alt="bg-image" className=" z-0 top-0 left-0 absolute brightness-50 h-screen w-screen object-cover"/>

                <div className="absolute left-1/2 z-10 mt-20 p-14 -translate-x-1/2 w-6/12 h-fit">
                    {/* <div className=" bg-black h-full w-full">
                        
                    </div> */}
                    <form className="text-white flex flex-col gap-6">
                        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                        <input type="text" placeholder="Email or mobile number" className="py-4 px-2 bg-transparent border-gray-500 border-2 rounded-sm"/>
                        <input type="password" placeholder="Password" className="py-4 px-2 bg-transparent border-gray-500 border-2 rounded-sm" />
                        <button className="bg-red-600 py-4 rounded-sm">Sign In</button>
                        <p className="text-center">OR</p>
                        <button className="py-4 bg-gray-700 opacity-45 text-opacity-100">Use a sign-in code</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;