import { useSelector } from "react-redux";
import languageConstant from "../utils/languageConstant";
import { useRef } from "react";
import openAi from "../utils/openAi";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const userLang = useSelector((store) => store.config.lang);
  const inData = useRef();

  const handleGPTSearch = async () => {
    console.log(inData.current.value);

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inData.current.value}`, API_OPTIONS);
    const result = await data.json();

    console.log(result);
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: "+inData.current.value+". give me names of 5 movies only, comma seperated like the example result given ahead. Example Result: Gadar, Border, Krish, koi mil gaya, hum aapke hai kon"

    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults?.choices);
  };

  return (
    <div className="z-20 pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 p-6 grid grid-cols-12 rounded-lg gap-2 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inData}
          type="text"
          placeholder={languageConstant[userLang].PlaceHolderText}
          className="p-4 col-span-9 rounded-lg bg-slate-100 outline-none text-lg font-semibold"
        />
        <button
          className="col-span-3 p-4 bg-red-600 rounded-lg text-white font-semibold text-lg"
          onClick={handleGPTSearch}
        >
          {languageConstant[userLang].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
