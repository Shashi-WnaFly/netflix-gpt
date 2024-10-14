import { useSelector } from "react-redux";
import languageConstant from "../utils/languageConstant";
import { useRef } from "react";
import openAi from "../utils/openAi";

const GPTSearchBar = () => {
  const userLang = useSelector((store) => store.config.lang);
  const inData = useRef();

  const handleGPTSearch = async () => {
    console.log(inData.current.value);

    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
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
