import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchView from "./GPTSearchView";

const GPTSearchPage = () => {
    return (
        <div className=" h-screen relative">
            <div className="-z-0 absolute top-0 left-0 bg-cover brightness-50">
                <img src={BG_URL} alt="bg netflix" />
            </div>
            <div className="relative">
                <GPTSearchBar />
                <GPTSearchView />

            </div>
        </div>
    )
}

export default GPTSearchPage;