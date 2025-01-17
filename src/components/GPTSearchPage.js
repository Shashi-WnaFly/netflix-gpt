import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";

const GPTSearchPage = () => {
    return (
        <div className=" h-screen relative">
            <div className=" -z-0 absolute top-0 left-0 md:bg-cover brightness-50">
                <img className="md:w-screen h-screen object-cover" src={BG_URL} alt="bg netflix" />
            </div>
            <div className="relative">
                <GPTSearchBar />
                <GPTMoviesSuggestion />
            </div>
        </div>
    )
}

export default GPTSearchPage;